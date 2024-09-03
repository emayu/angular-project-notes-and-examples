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


export function rootReducer(state:IAppState, action):IAppState{
    switch (action.type) {
        case ADD_TODO:
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
        case REMOVE_TODO:
            const newTodos = state.todos.filter(t => t.id !== action.id);
            return tassign(state, { todos: newTodos, lastUpdate: new Date() });
        case TOGLE_TODO:
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

        case CLEAR_TODOS:
            return tassign(state, { todos: [], lastUpdate: new Date() })
    }
    return state;
}