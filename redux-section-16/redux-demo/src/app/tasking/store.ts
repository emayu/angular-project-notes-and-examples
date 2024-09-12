import { tassign } from 'tassign'; 
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCESS, FETCH_TODOS_ERROR, PROCESSING_REQUEST, } from './actions'; 

export interface ITaskingState {
  todos: ITodo[];
  lastUpdate: Date;
  loadingList: boolean;
  processing: boolean;
  error: Error; 
}

export interface  ITodo {
  userId:number;
  id: number;
  title: String;
  completed: boolean;
}

export const TASKING_INITIAL_STATE: ITaskingState = { 
  todos: [],
  lastUpdate: null,
  loadingList: false,
  processing: false,
  error: null,
}

function addTodo(state, action) {
  //var newTodo = { id: state.todos.length + 1, title: action.title };

  return tassign(state, {
    todos: [action.todo].concat(state.todos),
    lastUpdate: new Date(),
    processing: false
  });
}

function toggleTodo(state:ITaskingState, action) {
  const todo:ITodo = state.todos.find(t => t.id === action.id);
  console.log('found', todo)
  // Now, we need to find the position of this item in the array. 
  const index = state.todos.indexOf(todo);
  console.log('index', index);
  return tassign(state, {
    todos: [
      ...state.todos.slice(0, index),
      tassign(todo, { completed: !todo.completed }),
      ...state.todos.slice(index + 1),
    ],
    lastUpdate: new Date()
  });
}

function removeTodo(state, action) {
  return tassign(state, {
    todos: state.todos.filter(t => t.id !== action.id),
    lastUpdate: new Date()
  });
}

function clearTodos(state, action) {
  return tassign(state, {
    todos: [],
    lastUpdate: new Date()
  });
}

const fetchTodos = (state:ITaskingState, action) => {
  return tassign(state, {loadingList: true});
}


const fetchTodosSucess = (state:ITaskingState, action ) => {
  console.log('changing to false');
  return tassign(state, {todos: [...action.todos], loadingList: false})
}

const fetchTodosError = (state:ITaskingState, action ) => {
  return tassign(state, {loadingList: false, error: tassign(action.error, {})});
}


const processingRequest = (state:ITaskingState, action ) => {
  return tassign(state, {processing:true});
}


export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {
  switch (action.type) {
    case ADD_TODO: return addTodo(state, action);
    case TOGGLE_TODO: return toggleTodo(state, action);
    case REMOVE_TODO: return removeTodo(state, action);
    case CLEAR_TODOS: return clearTodos(state, action);
    case FETCH_TODOS_REQUEST: return fetchTodos(state, action);
    case FETCH_TODOS_SUCESS: return fetchTodosSucess(state, action);
    case FETCH_TODOS_ERROR: return fetchTodosError(state, action);
    case PROCESSING_REQUEST: return processingRequest(state, action);
  }

  return state; 
}