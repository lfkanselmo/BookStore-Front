import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { authorListI } from '../../models/authorList.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {
  authors: authorListI[] = [];

  deleteConfirmationStatus: boolean = false;
  deleteConfirmationMsg: any = "";
  idToDelete:Number | undefined;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllAuthors().subscribe(data => {
      this.authors = data;
    })
  }

  editAuthor(id:number){
    this.router.navigate(["authors/editAuthor", id]);
  }

  newAuthor(){
    this.router.navigate(["authors/newAuthor"]);
  }

  async deleteAuthor() {
    console.log(this.idToDelete);
    try {
        const data = await this.api.deleteAuthor(this.idToDelete).toPromise();
        console.log(data);
        this.deleteConfirmationStatus = false;
        location.reload();
    } catch (error) {
        console.error('Error deleting author:', error);
    }
}

  showConfirmation(name:any,id:any){
    this.idToDelete = id;
    this.deleteConfirmationStatus = true;
    this.deleteConfirmationMsg = "¿Desea eliminar al autor " + name + "?";
  }

  cancelDelete(){
    this.deleteConfirmationStatus = false;
  }

  goBack(route:string){
    this.router.navigate([route]);
  }
}
