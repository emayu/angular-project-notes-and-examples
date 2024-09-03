import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from 'app/store';
import { ADD_TODO, REMOVE_TODO, TOGLE_TODO } from 'app/actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  constructor(private service: TodoService, private ngRedux:NgRedux<IAppState>) { 
  }

  @select()
  todos;

  addTodo(input) {
    if (!input.value) return; 

    //this.service.addTodo(input.value);
    this.ngRedux.dispatch( { type: ADD_TODO, title: input.value })

    input.value = '';
  }

  toggleTodo(todo) {
    //this.service.toggleTodo(todo);
    this.ngRedux.dispatch( {type: TOGLE_TODO, id: todo.id});
  }

  removeTodo(todo) {
    //this.service.removeTodo(todo);
    this.ngRedux.dispatch( {type: REMOVE_TODO, id: todo.id})
  }
}
