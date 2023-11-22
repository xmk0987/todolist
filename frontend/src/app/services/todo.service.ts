import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = "http://localhost:3000/todos";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json"}),
  };

  constructor(private http: HttpClient) { }


  createTodo(newTaskObject: any): Observable<any> {
    const token = window.localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
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
      `${this.url}/gettodos?userId=${userId}`, 
      { headers }
    );
  }


  deleteTodo(todoId: number){
    const token = window.localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.delete<any>(
      `${this.url}/deletetodo?todoId=${todoId}`, 
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