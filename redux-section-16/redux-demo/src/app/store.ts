import { INCREMENT } from "./actions";
import { tassign } from 'tassign';

export interface IAppState {
    counter: number;
}

export const INITAL_STATE: IAppState = {
    counter: 0
}

export function rootReducer(state:IAppState, action):IAppState{

    switch(action.type){
        case INCREMENT: return tassign(state, { counter : state.counter + 1});
    }

    return state;
}