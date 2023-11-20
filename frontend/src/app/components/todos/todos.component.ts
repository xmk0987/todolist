import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

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

  date: Date = new Date();
  formattedDate: string;

  constructor(private datePipe: DatePipe) {
    this.formattedDate = this.formatDate(this.date);
  }

  private formatDate(date: Date): string {
    const weekday = this.datePipe.transform(date, 'EEEE');
    const dayMonthYear = this.datePipe.transform(date, 'dd.MM.yyyy');
    const time = this.datePipe.transform(date, 'HH:mm');

    return `${weekday} | ${dayMonthYear} | ${time}`;
  }


  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: true,
        pinned: true,
        editing: false,
      },
      {
        content: 'Second todo',
        completed: false,
        pinned: false,
        editing: false
      }
    ]
  }

  toggleDone (id: number):void {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }

      return v;
    })
  }

  removeTask (id: number): void{
    this.todos.map((v, i) => {
      if( i == id ) {
        this.todos.splice(i, 1);
      }
    })
  }

  addTask(): void {
    if (this.newTask.trim() !== '') { 
      this.todos.push({
        content: this.newTask,
        completed: false,
        pinned: false,
        editing: false
      });
      this.newTask = ''; 
    }
  }

  editTask(id: number): void{
    this.todos[id].editing = true;
  }

  saveTask(id: number): void {
    this.todos[id].editing = false;
  }

  flagTask(id: number): void{
    this.todos[id].pinned = !this.todos[id].pinned;
    console.log(this.todos[id].pinned);
  }

}
