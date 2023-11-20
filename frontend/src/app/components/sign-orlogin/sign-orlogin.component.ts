import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"


import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign-orlogin',
  templateUrl: './sign-orlogin.component.html',
  styleUrl: './sign-orlogin.component.css'
})
export class SignORloginComponent implements OnInit{
  signupForm!: FormGroup;
  loginForm!: FormGroup;

  signUpMessage = "";

  title: string =  "LOGIN";

  showLoginForm: boolean = true;
  showSignupForm: boolean = false;

  constructor(private authService: AuthService) {}

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
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  signup(): void {
    console.log("Signup");
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      this.signUpMessage = "You can now login."
    });
    this.signupForm.reset();
    this.toggleForms(true);

  }


  createLoginFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }
  
  login(): void{
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe();
  }
}
