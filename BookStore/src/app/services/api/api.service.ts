import { Injectable } from '@angular/core';
import {AuthorI} from '../../models/author.interface';
import {ResponseI} from '../../models/reponse.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:8000/";

  constructor(private http:HttpClient) { }

  createAuthor(data:AuthorI):Observable<ResponseI>{
    console.log("Si entra al createAuthor");
    let path = this.url + "authors/";
    console.log(path);
    return this.http.post<ResponseI>(path, data);
  }

}
