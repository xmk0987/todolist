import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { TodoService } from '../../services/todo.service';

import { User } from '../../models/User';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers: [DatePipe] 
})
export class TodosComponent implements OnInit{

  todos: Todo[] = [];
  newTask: string = '';
  userId: Pick<User, "id">
  date: Date = new Date();
  formattedDate: string;

  constructor(
    private datePipe: DatePipe, 
    private authService: AuthService,
    private todoService: TodoService
    ) {
    this.formattedDate = this.formatDate(this.date);
    this.userId = this.authService.userId;
  }

  private formatDate(date: Date): string {
    const weekday = this.datePipe.transform(date, 'EEEE');
    const dayMonthYear = this.datePipe.transform(date, 'dd.MM.yyyy');
    const time = this.datePipe.transform(date, 'HH:mm');

    return `${weekday} | ${dayMonthYear} | ${time}`;
  }


  ngOnInit(): void {
    this.getTasks();
  }


// Adding task to database and resetting list
  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTaskObject = {
        userId: this.userId,
        content: this.newTask,
      };

      this.todoService.createTodo(newTaskObject).subscribe(
        (response) => {
          this.getTasks();

        },
        (error) => {
          console.error('Error creating todo:', error);
        }
      );

      this.newTask = '';
    }
  }

  // Get all tasks from database
  getTasks(): void{
    this.todoService.getTasks(this.userId).subscribe(
      (response) => {
        this.todos = response.todos;
      },
      (error) => {
        console.error('Error retrieving todo:', error);
      }
    );
  }

  removeTask(index: number): void{
    const todoId = this.todos[index].id;
    this.todoService.deleteTodo(todoId).subscribe(
      (response) => {
        this.getTasks();
      },
      (error) => {
        console.error('Error deleting todo:', error);
      }
    );
  }

  editTask(id: number): void{
    this.todos[id].editing = true;
  }

  saveTask(id: number): void {
    this.todos[id].editing = false;
    const newContent = this.todos[id].content;
    this.updateTask(id, {"content": newContent});
  }

  flagTask(id: number): void{
    const newContent = !this.todos[id].pinned;
    this.updateTask(id, {"pinned": newContent});
  }

  toggleDone (id: number):void {
    const newContent = !this.todos[id].completed;
    this.updateTask(id, {"completed": newContent});
  }

  updateTask(todoIndex: number, updates: { [key:string]: any }): void{
    const todoId = this.todos[todoIndex].id;
    this.todoService.updateTodo(todoId, updates).subscribe(
      (response) => {
        this.getTasks();

      },
      (error) => {
        console.error('Error updating task:', error);
      }
    );
  }

}
