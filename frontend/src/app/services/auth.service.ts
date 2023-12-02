import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { first, catchError, tap, map} from 'rxjs/operators';


import { User } from "../models/User"


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://onlinetodolist-kfg5.onrender.com/auth";
  //private url = "http://localhost:3000/auth";

  // Use localStorage to persist the authentication state and token separately
  private storageKey = 'authData';
  private authData: { userId: Pick<User, 'id'> } | null = null;
  private authToken: string | null = null;

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId!: Pick<User, 'id'>;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object

  ) {
    if (isPlatformBrowser(this.platformId)) {

    // Retrieve auth data from localStorage on service initialization
    const storedAuthData = localStorage.getItem(this.storageKey);
    this.authData = storedAuthData ? JSON.parse(storedAuthData) : null;

    // Retrieve auth token from localStorage on service initialization
    const storedAuthToken = localStorage.getItem('token');
    this.authToken = storedAuthToken || null;

    // Update authentication state based on stored data
    if (this.authData && this.authToken) {
      this.userId = this.authData.userId;
      this.isUserLoggedIn$.next(true);
    }
  }
  }

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        catchError((error) => {
          if (error.status === 400) {
            // Handle validation errors
            return throwError({ validationErrors: error.error.errors });
          } else {
            // Handle other errors
            return throwError('An unknown error occurred.');
          }
        }),
      );
  }

  login(email: Pick<User, 'email'>, password: Pick<User, 'password'>): Observable<{
    token: string;
    userId: Pick<User, 'id'>;
  }> {
    return this.http
      .post<{ token: string; userId: Pick<User, 'id'> }>(
        `${this.url}/login`,
        { email, password },
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          let errorMessage = 'An unknown error occurred.';
  
          if (error.status === 401) {
            errorMessage = 'Wrong email or password.';
          } else if (error.status === 404) {
            errorMessage = 'User with this email could not be found.';
          }
  
          console.error('Login Error:', error);
  
          // Pass the custom error message to the client
          return throwError({ error: { message: errorMessage } });
        }),
        map((tokenObject: { token: string; userId: Pick<User, 'id'> }) => {
          // Update authData and persist in localStorage
          this.authData = { userId: tokenObject.userId };
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(this.storageKey, JSON.stringify(this.authData));
          }
  
          // Update authToken and persist in localStorage
          this.authToken = tokenObject.token;
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem("token", tokenObject.token);
          }
  
          this.userId = tokenObject.userId;
          this.isUserLoggedIn$.next(true);
          this.router.navigate(['todos']);
          return tokenObject;
        })
      );
  }


  logout(): void {
    // Remove authData and authToken from localStorage on logout
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem('token');

    this.authData = null;
    this.authToken = null;
    this.isUserLoggedIn$.next(false);
    this.router.navigate(['login']);
  }
}
