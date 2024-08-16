import { Component } from '@angular/core';

import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import {ApiService} from '../../services/api/api.service';
import {AuthorI} from '../../models/author.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrl: './new-author.component.css'
})

export class NewAuthorComponent {

  newAuthorForm = new FormGroup({
    name: new FormControl('',Validators.required),
    nationality: new FormControl(''),
    biography: new FormControl('')
  })

  createdSuccess: boolean = false;

  constructor(private api:ApiService, private router: Router){}

  onSubmit(form: any){
    this.api.createAuthor(form).subscribe(
    response =>{
      console.log(response);    
    },
    error => {
      console.log(error);
    });
  }

  savedAlert(){
    this.createdSuccess = true;
  }

  successAlert(form:FormGroup){
    this.createdSuccess = false;
    form.reset();
    this.goBack();
  }

  goBack(){
    this.router.navigate(["authors/"]);
  }

}
