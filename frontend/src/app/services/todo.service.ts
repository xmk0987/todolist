import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


import { User } from "../models/User";
import { Todo} from "../models/Todo";
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = "http://localhost:3000/todos";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json"}),
  };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }


  createTodo(newTaskObject: any): Observable<any> {
    const token = window.localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    console.log("Ollaa services");
    console.log(newTaskObject);
  
    return this.http.post<any>(
      `${this.url}/addtodo`,
      { userId: newTaskObject.userId, content: newTaskObject.content },
      { headers }
    );
  };

  getTasks(userId: Pick<User, "id">): Observable<any> {
    const token = window.localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<any>(
      `${this.url}/gettodos?userId=${userId}`, // Include userId as a query parameter
      { headers }
    );
  }

  deleteTodo(todoId: number){
    const token = window.localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.delete<any>(
      `${this.url}/deletetodo?todoId=${todoId}`, // Include userId as a query parameter
      { headers }
    );
  }

  updateTodo(todoId: number, updates: { [key:string]: any }){
    const token = window.localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<any>(
      `${this.url}/updatetodo?todoId=${todoId}`, 
      updates,
      { headers}
      );
  }

}