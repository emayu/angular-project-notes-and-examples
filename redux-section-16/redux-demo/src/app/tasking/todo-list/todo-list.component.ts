import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions'; 
import { IAppState } from '../../store'; 
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select(s => s.tasking.todos) todos; 

  @select((s:IAppState) => s.tasking.loadingList ) isLoading;
  
  @select((s:IAppState) => s.tasking.processing) processing;
  
  constructor(private ngRedux: NgRedux<IAppState>, private todoService:TodoService) {
  }
  ngOnInit(): void {
    this.todoService.loadTodos();

    // this.ngRedux.dispatch({type: 'FETCH_TODOS_REQUEST'})

    // this.todoService
    //   .getTodos()
    //   .subscribe(
    //     (response) => {
    //       // // Non-redux way
    //       // this.todos = response.json();
          
    //       //Redux way
    //       this.ngRedux.dispatch({ type: 'FETCH_TODOS_SUCESS', todos: response.json() })
    //     },
    //     error => {
    //       this.ngRedux.dispatch({type: ''})
    //     }
    //   )
  }

  addTodo(input) {
    if (!input.value) return; 
    this.todoService.addTodo(input.value);
     input.value = '';
  }

  toggleTodo(todo) {
    console.log('modifing', todo);
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
