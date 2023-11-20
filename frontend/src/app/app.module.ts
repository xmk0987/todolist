import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavigationComponent } from './components/navigation/navigation.component';
import { TodosComponent } from './components/todos/todos.component';
import { SignORloginComponent } from './components/sign-orlogin/sign-orlogin.component';
import { LogoutComponent } from './components/logout/logout.component';

import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TodosComponent,
    SignORloginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
