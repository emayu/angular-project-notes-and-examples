import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IAppState } from 'app/store';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { ADD_TODO, FETCH_TODOS_ERROR, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCESS, PROCESSING_REQUEST } from '../actions';

@Injectable()
export class TodoService {
  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: Http, private ngRedux:NgRedux<IAppState>) {}

  loadTodos() { 
    
    this.ngRedux.dispatch({type: FETCH_TODOS_REQUEST});

    this.http.get(this.url)
      .subscribe(
        (response) => {
          //Redux way
          this.ngRedux.dispatch({ type: FETCH_TODOS_SUCESS, todos: response.json() })
        },
        error => {
          this.ngRedux.dispatch({type: FETCH_TODOS_ERROR})
        }
      )
  }

  addTodo(title:String) {
    const todo = { title };
    this.ngRedux.dispatch({ type: PROCESSING_REQUEST});
    this.http.post(this.url, todo)
    .subscribe(
      next => {
        this.ngRedux.dispatch({ type: ADD_TODO, todo: next.json() });
      }
    )
  }
}