import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TodosComponent } from './components/todos/todos.component';
import { SignORloginComponent } from './components/sign-orlogin/sign-orlogin.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: "login", component: SignORloginComponent },
  { path: "todos", component: TodosComponent, canActivate: [AuthGuardService] },
  { path: "logout", component: LogoutComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
