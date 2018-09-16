import { Action } from '@ngrx/store';

export const SET = 'SET TODO'
export const REMOVE = 'REMOVE TODO'
export const DONE = 'DONE TODO'

export class SetTodo implements Action {
    readonly type = SET;
    
    constructor(public text: string){}
}

export class RemoveTodo implements Action{
    readonly type = REMOVE;

}

export class DoneTodo implements Action{
    readonly type = DONE;
}

export type Actions =
| SetTodo | RemoveTodo | DoneTodo;