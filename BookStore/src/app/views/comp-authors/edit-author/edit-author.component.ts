import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorI } from '../../../models/authors/author.interface';
import { AuthorsService } from '../../../services/authors/authors-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css'
})
export class EditAuthorComponent implements OnInit {

  authorData: AuthorI | undefined;

  editForm = new FormGroup({
    name: new FormControl(''),
    nationality: new FormControl(''),
    biography: new FormControl('')
  });

  constructor(private router: Router, private activeRoute: ActivatedRoute, private api: AuthorsService) { }

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
    });
  }

  goBack(){
    this.router.navigate(['authors']);
  }


  showUpdateConfirmation(){
    Swal.fire({
      title: "Actualizar Autor",
      text: "¿Está seguro de actualizar el autor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Actualizar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Actualizado!",
          text: "El autor fue actualizado",
          icon: "success"
        });
        this.goBack();
      }
    });
  }

}
