import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TodosComponent } from './components/todos/todos.component';
import { HomeComponent } from './components/home/home.component';
import { SignORloginComponent } from './components/sign-orlogin/sign-orlogin.component';

const routes: Routes = [
  { path:"", component: HomeComponent},
  { path:"login", component: SignORloginComponent},
  { path:"todos", component: TodosComponent},
  { path:"**", redirectTo: ""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
