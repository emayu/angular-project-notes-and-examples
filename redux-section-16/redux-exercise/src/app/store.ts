import { tassign } from "tassign";
import { ADD_TODO, CLEAR_TODOS, REMOVE_TODO, TOGLE_TODO } from "./actions";

export interface IAppState {
    todos:ITodo[],
    lastUpdate:Date;
    
}

interface ITodo{
    id:number;
    title:string;
    isCompleted: boolean;
}

export const INITIAL_STATE:IAppState = {
    todos: [],
    lastUpdate: null
    
}


const addTodo = (state: IAppState, action): IAppState => {
    const now = new Date();
    const newTodo = {
        id: now.getTime(),
        title: action.title,
        isCompleted: false
    };
    return tassign(state,
        {
            todos: state.todos.concat(newTodo),
            lastUpdate: now
        });
}

const togleTodo = (state: IAppState, action): IAppState => {
    const targetTodo = state.todos.find(t => t.id === action.id);
    const targetIndex = state.todos.indexOf(targetTodo);
    const beforeE = state.todos.slice(0, targetIndex);
    const afterE = state.todos.slice(targetIndex + 1);
    return tassign(state,
        {
            todos: [...beforeE,
            tassign(targetTodo, { isCompleted: !targetTodo.isCompleted }),
            ...afterE],
            lastUpdate: new Date()
        });
}

const removeTodo = (state: IAppState, action): IAppState => {
    const newTodos = state.todos.filter(t => t.id !== action.id);
    return tassign(state, { todos: newTodos, lastUpdate: new Date() });
}


export function rootReducer(state:IAppState, action):IAppState{
    switch (action.type) {
        case ADD_TODO: 
            return addTodo(state, action);
        case REMOVE_TODO:
            return removeTodo(state, action);
        case TOGLE_TODO:
            return togleTodo(state, action)
        case CLEAR_TODOS:
            return tassign(state, { todos: [], lastUpdate: new Date() })
    }
    return state;
}