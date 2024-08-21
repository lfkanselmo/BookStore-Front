import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors-api.service';
import { authorListI } from '../../../models/authors/authorList.interface';
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
  idToDelete: Number | undefined;

  constructor(private api: AuthorsService, private router: Router) { }

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
    this.deleteConfirmationStatus = false;
    try {
      const data = await this.api.deleteAuthor(this.idToDelete).toPromise();
      this.deleteConfirmationStatus = true;
    } catch (error) {
      console.error('Error deleting author:', error);
      Swal.fire({
        title: "Error al eliminar",
        text: `Ocurrió un error al eliminar el autor`,
        icon: "error",
        showConfirmButton: true
      });
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
    }).then(async (result) =>  {
      if (result.isConfirmed) {
         await this.deleteAuthor();
        if (this.deleteConfirmationStatus) {
          await Swal.fire({
            title: "Eliminado!",
            text: `Se eliminó el autor ${name}`,
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
