import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeSiteComponent} from './views/welcome-site/welcome-site.component';
import {AuthorsComponent} from './views/comp-authors/authors/authors.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import { EditAuthorComponent } from './views/comp-authors/edit-author/edit-author.component';
import { NewAuthorComponent } from './views/comp-authors/new-author/new-author.component';
import { EditorialsComponent } from './views/comp-editorials/editorials/editorials.component';
import { EditEditorialComponent } from './views/comp-editorials/edit-editorial/edit-editorial.component';
import { NewEditorialComponent } from './views/comp-editorials/new-editorial/new-editorial.component';


const routes: Routes = [
  {path:'', redirectTo:'welcomeSite', pathMatch:'full'},
  {path: 'welcomeSite', component: WelcomeSiteComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'authors', component: AuthorsComponent},
  {path: 'authors/newAuthor', component:NewAuthorComponent},
  {path: 'authors/editAuthor/:id', component:EditAuthorComponent},
  {path: 'editorials', component: EditorialsComponent},
  {path: 'editorials/newEditorial', component: NewEditorialComponent},
  {path:'editorials/editEditorial/:id', component: EditEditorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [WelcomeSiteComponent, DashboardComponent, AuthorsComponent, NewAuthorComponent, EditAuthorComponent, EditorialsComponent, NewEditorialComponent, EditEditorialComponent]
