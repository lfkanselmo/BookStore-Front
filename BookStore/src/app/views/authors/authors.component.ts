import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  constructor(private router:Router){};

  navigateTo(route:any){
    this.router.navigate([route]);
  }
}
