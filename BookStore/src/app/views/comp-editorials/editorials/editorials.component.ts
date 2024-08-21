import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EditorialApiService } from '../../../services/editorials/editorial-api.service';
import { EditorialListI } from '../../../models/editorials/editorialList.interface';

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.component.html',
  styleUrl: './editorials.component.css'
})
export class EditorialsComponent implements OnInit {
  editorials: EditorialListI[] = [];

  deleteConfirmationStatus: boolean = false;
  idToDelete: Number | undefined;

  constructor(private api: EditorialApiService, private router: Router) { }


  ngOnInit(): void {
    this.api.getAllEditorials().subscribe(data => {
      this.editorials = data;
    })
  }

  editEditorial(id: number) {
    this.router.navigate(["editorials/editEditorial", id]);
  }

  newEditorial() {
    this.router.navigate(["editorials/newEditorial"]);
  }

  async deleteEditorial() {
    this.deleteConfirmationStatus = false;
    try {
      const data = await this.api.deleteEditorial(this.idToDelete).toPromise();
      this.deleteConfirmationStatus = true;
    } catch (error) {
      console.error('Error deleting author:', error);
      Swal.fire({
        title: "Error al eliminar",
        text: `Ocurrió un error al eliminar la editorial`,
        icon: "error",
        showConfirmButton: true
      });
    }
  }

  showDeleteConfirmation(name: any, id: any) {
    this.idToDelete = id;

    Swal.fire({
      title: "Eliminar Editorial",
      text: `¿Desea eliminar la editorial ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) =>  {
      if (result.isConfirmed) {
         await this.deleteEditorial();
        if (this.deleteConfirmationStatus) {
          await Swal.fire({
            title: "Eliminado!",
            text: `Se eliminó la editorial ${name}`,
            icon: "success",
            showConfirmButton: true
          });
        }
      }
    }).finally(() =>
      location.reload()
    );
  }


  goBack(route: string) {
    this.router.navigate([route]);
  }


}
