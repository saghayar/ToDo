import {Action} from '@ngrx/store';
import {Todo} from '../../../shared/todo';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SELECT_TODO = 'SELECT_TODO';
export const FIND_TODO = 'FIND_TODO';

export class AddTodo implements Action {
    readonly type = ADD_TODO;

    constructor(public payload: Todo) {
    }
}

export class SelectTodo implements Action {
    readonly type = SELECT_TODO;

    constructor(public payload: Todo) {
    }
}

export class EditTodo implements Action {
    readonly type = EDIT_TODO;

    constructor(public payload: Todo) {
    }
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;

    constructor(public payload: Todo) {
    }
}

export class FindTodo implements Action {
    readonly type = FIND_TODO;

    constructor(payload: number) {
    }
}

export type TodoListActions = AddTodo |
    EditTodo |
    SelectTodo |
    FindTodo |
    DeleteTodo;
