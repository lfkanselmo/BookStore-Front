import { Component } from '@angular/core';

import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { EditorialApiService } from '../../../services/editorials/editorial-api.service';
import { EditorialI } from '../../../models/editorials/editorial.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-editorial',
  templateUrl: './new-editorial.component.html',
  styleUrl: './new-editorial.component.css'
})
export class NewEditorialComponent {

  newEditorialForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl(''),
    country: new FormControl('')
  })

  constructor(private api: EditorialApiService, private router: Router) { }

  onSubmit(form: any) {

    if (form.name) {
      this.api.createEditorial(form).subscribe(
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
        text: "El nombre de la editorial no puede estar vacío"
      });
    }
  }

  showCreateConfirmation(form: FormGroup) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Editorial creada!",
      showConfirmButton: false,
      timer: 1500
    }).finally(() => {
      form.reset;
      this.goBack()
    });
  }

  goBack() {
    this.router.navigate(["editorials/"]);
  }


}
