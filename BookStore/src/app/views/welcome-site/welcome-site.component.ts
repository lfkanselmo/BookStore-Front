import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-site',
  templateUrl: './welcome-site.component.html',
  styleUrl: './welcome-site.component.css'
})
export class WelcomeSiteComponent {

  constructor(private router: Router){}

  navigateTo(route: any){
    this.router.navigate([route]);
  }

}
