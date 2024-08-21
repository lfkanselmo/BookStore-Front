import { Injectable } from '@angular/core';
import { ResponseI } from '../../models/reponse.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditorialI } from '../../models/editorials/editorial.interface';
import { EditorialListI } from '../../models/editorials/editorialList.interface';

@Injectable({
  providedIn: 'root'
})
export class EditorialApiService {

  url: string = "http://localhost:8000/";

  endEditorials = "editorials/";

  constructor(private http: HttpClient) { }

  createEditorial(data: EditorialI): Observable<ResponseI> {
    let path = this.url + this.endEditorials;
    return this.http.post<ResponseI>(path, data);
  }

  getAllEditorials(): Observable<EditorialListI[]> {
    let path = this.url + this.endEditorials;
    return this.http.get<EditorialListI[]>(path);
  }

  getSingleEditorial(id: string | null): Observable<EditorialI> {
    let path = this.url + this.endEditorials + id;
    return this.http.get<EditorialI>(path);
  }

  editEditorial(id: String | null, data: EditorialI): Observable<ResponseI> {
    let path = this.url + this.endEditorials + id;
    return this.http.put<ResponseI>(path, data);
  }

  deleteEditorial(id: Number | undefined): Observable<ResponseI> {
    let path = this.url + this.endEditorials + id;
    console.log(path);
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: id
    }
    return this.http.delete<ResponseI>(path, Options);
  }
}
