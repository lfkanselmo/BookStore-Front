import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorI } from '../../models/author.interface';
import { ApiService } from '../../services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css'
})
export class EditAuthorComponent implements OnInit {

  createdSuccess: boolean = false;

  authorData: AuthorI | undefined;

  editForm = new FormGroup({
    name: new FormControl(''),
    nationality: new FormControl(''),
    biography: new FormControl('')
  });

  constructor(private router: Router, private activeRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    let authorId = this.activeRoute.snapshot.paramMap.get('id');
    this.api.getSingleAuthor(authorId).subscribe(data => {
      this.authorData = data;
      this.editForm.setValue({
        'name': this.authorData.name,
        'nationality': this.authorData.nationality,
        'biography': this.authorData.biography
      });
    })
  }

  onSubmit(form:any){
    let authorId = this.activeRoute.snapshot.paramMap.get('id');
    this.api.editAuthor(authorId,form).subscribe(data =>{
      console.log(data);
    });
  }

  goBack(){
    this.router.navigate(['authors']);
  }


  savedAlert(){
    this.createdSuccess = true;
  }

  successAlert(){
    this.createdSuccess = false;
    this.goBack();
  }

}
