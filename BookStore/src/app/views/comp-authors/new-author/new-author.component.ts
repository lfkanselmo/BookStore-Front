import { Component } from '@angular/core';

import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AuthorsService } from '../../../services/authors/authors-api.service';
import { AuthorI } from '../../../models/authors/author.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrl: './new-author.component.css'
})

export class NewAuthorComponent {

  newAuthorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    nationality: new FormControl(''),
    biography: new FormControl('')
  })

  createdSuccess: boolean = false;

  constructor(private api: AuthorsService, private router: Router) { }

  onSubmit(form: any) {

    if (form.name) {
      this.api.createAuthor(form).subscribe(
        response => {
          this.showCreateConfirmation(form);
        },
        error => {
          console.log(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre del autor no puede estar vacío"
      });
    }
  }

  showCreateConfirmation(form: FormGroup) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Autor creado!",
      showConfirmButton: false,
      timer: 1500
    }).finally(() => {
      form.reset;
      this.goBack()
    });
  }

  goBack() {
    this.router.navigate(["authors/"]);
  }

}
