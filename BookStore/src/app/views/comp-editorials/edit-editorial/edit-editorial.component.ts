import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorialI } from '../../../models/editorials/editorial.interface';
import { EditorialApiService } from '../../../services/editorials/editorial-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-editorial',
  templateUrl: './edit-editorial.component.html',
  styleUrl: './edit-editorial.component.css'
})
export class EditEditorialComponent implements OnInit {

  editorialData: EditorialI | undefined;

  editForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl('')
  });

  constructor(private router: Router, private activeRoute: ActivatedRoute, private api: EditorialApiService) { };
  ngOnInit(): void {
    let editorialId = this.activeRoute.snapshot.paramMap.get('id');
    this.api.getSingleEditorial(editorialId).subscribe(data => {
      this.editorialData = data;
      this.editForm.setValue({
        'name': this.editorialData.name,
        'address': this.editorialData.address,
        'country': this.editorialData.country
      });
    })
  }

  onSubmit(form:any){
    let editorialId = this.activeRoute.snapshot.paramMap.get('id');
    this.api.editEditorial(editorialId,form).subscribe(data =>{
    });
  }

  goBack(){
    this.router.navigate(['editorials']);
  }


  showUpdateConfirmation(){
    Swal.fire({
      title: "Actualizar Editorial",
      text: "¿Está seguro de actualizar la editorial?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Actualizar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Actualizado!",
          text: "La editorial fue actualizada",
          icon: "success"
        });
        this.goBack();
      }
    });
  }

}
