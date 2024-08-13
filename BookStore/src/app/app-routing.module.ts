import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeSiteComponent} from './views/welcome-site/welcome-site.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import { ShowAuthorComponent } from './views/show-author/show-author.component';
import { EditAuthorComponent } from './views/edit-author/edit-author.component';
import { NewAuthorComponent } from './views/new-author/new-author.component';

const routes: Routes = [
  {path:'', redirectTo:'welcomeSite', pathMatch:'full'},
  {path: 'welcomeSite', component: WelcomeSiteComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'showAuthor', component:ShowAuthorComponent},
  {path: 'newAuthor', component:NewAuthorComponent},
  {path: 'editAuthor', component:EditAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [WelcomeSiteComponent, DashboardComponent, ShowAuthorComponent, NewAuthorComponent, EditAuthorComponent]
