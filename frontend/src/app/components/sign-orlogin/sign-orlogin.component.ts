import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"


@Component({
  selector: 'app-sign-orlogin',
  templateUrl: './sign-orlogin.component.html',
  styleUrl: './sign-orlogin.component.css'
})
export class SignORloginComponent implements OnInit{
  signupForm!: FormGroup;
  loginForm!: FormGroup;

  title: string =  "SIGNUP";

  showLoginForm: boolean = false;
  showSignupForm: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.signupForm = this.createSignupFormGroup();
    this.loginForm = this.createLoginFormGroup();

  }
  // Method to toggle between login and signup forms
  toggleForms(isLogin: boolean): void {
    this.showLoginForm = isLogin;
    this.showSignupForm = !isLogin;
    this.title = isLogin ? "LOGIN" : "SIGNUP";
  }

  // Method to add or remove the 'glow' class based on the chosen form
  getButtonClass(isLogin: boolean): string {
    return isLogin ? (this.showLoginForm ? 'glow' : '') : (this.showSignupForm ? 'glow' : '');
  }

  createSignupFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  signup(): void {
    console.log("Signup");
    console.log(this.signupForm.value);
  }


  createLoginFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }
  
  login(): void{
    console.log("Login");
    console.log(this.loginForm.value);
  }
}
