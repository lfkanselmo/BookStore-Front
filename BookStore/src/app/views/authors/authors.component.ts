import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { authorListI } from '../../models/authorList.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {
  authors: authorListI[] = [];

  deleteConfirmationStatus: boolean = false;
  deleteConfirmationMsg: any = "";
  idToDelete: Number | undefined;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllAuthors().subscribe(data => {
      this.authors = data;
    })
  }

  editAuthor(id: number) {
    this.router.navigate(["authors/editAuthor", id]);
  }

  newAuthor() {
    this.router.navigate(["authors/newAuthor"]);
  }

  async deleteAuthor() {
    try {
      const data = await this.api.deleteAuthor(this.idToDelete).toPromise();
      this.deleteConfirmationStatus = false;
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  }

  showDeleteConfirmation(name: any, id: any) {
    this.idToDelete = id;

    Swal.fire({
      title: "Eliminar Autor",
      text: `¿Desea eliminar el autor ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteAuthor();
        Swal.fire({
          title: "Eliminado!",
          text: `Se eliminó el autor ${name}`,
          icon: "success",
          showConfirmButton: true
        }).finally(() =>
          location.reload()
        );
      }
    });
  }

  goBack(route: string) {
    this.router.navigate([route]);
  }
}
