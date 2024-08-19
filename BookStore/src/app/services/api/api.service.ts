import { Injectable } from '@angular/core';
import {AuthorI} from '../../models/author.interface';
import {ResponseI} from '../../models/reponse.interface';
import {authorListI} from '../../models/authorList.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:8000/";

  endAuthors = "authors/";

  constructor(private http:HttpClient) { }

  createAuthor(data:AuthorI):Observable<ResponseI>{
    let path = this.url + this.endAuthors;
    return this.http.post<ResponseI>(path, data);
  }

  getAllAuthors():Observable<authorListI[]>{
    let path = this.url + this.endAuthors;
    return this.http.get<authorListI[]>(path);
  }

  getSingleAuthor(id: String | null):Observable<AuthorI>{
    let path = this.url + this.endAuthors + id;
    return this.http.get<AuthorI>(path)
  }

  editAuthor(id: String | null, data:AuthorI):Observable<ResponseI>{
    let path = this.url + this.endAuthors + id;
    return this.http.put<ResponseI>(path, data);
  }

  deleteAuthor(id: Number | undefined):Observable<ResponseI>{
    let path = this.url + this.endAuthors + id;
    console.log(path);
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body:id
    }
    return this.http.delete<ResponseI>(path,Options);
  }

}
