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
  loginMessage = "";
  errorMessage = false;

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
    this.authService.signup(this.signupForm.value).subscribe(
      (response) => {
        this.errorMessage = false;
        this.loginMessage = "You can now login";
        this.signUpMessage = "";
        this.toggleForms(true);
        this.signupForm.reset();
        this.loginForm.reset();
        this.resetErrorMsg()

      },
      (error) => {
        if (error.validationErrors) {
          this.errorMessage = true;
          this.signUpMessage = error.validationErrors[0];
          this.resetErrorMsg()

        } else {
          this.signUpMessage = "Something went wrong";
          this.resetErrorMsg()

        }
      }
    );
  }

  createLoginFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }
  
  login(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (tokenObject) => {
        // Login succesful
        this.errorMessage = false;
      },
      (error) => {
        // Login error
        this.errorMessage = true;
        if (error && error.error && error.error.message) {
          this.loginMessage = error.error.message;
          this.resetErrorMsg()

        } else {
          this.loginMessage = 'An unknown error occurred.';
          this.resetErrorMsg()
        }
      }
    );
  }

  resetErrorMsg(): void{
    setTimeout(() => {
      this.loginMessage = "";
      this.signUpMessage = "";
    },4000)
  }
}
