import * as fromState from '../todo-list/store/reducers/todo-list.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  todoList: fromState.State;
}

export const reducers: ActionReducerMap<AppState> = {
  todoList: fromState.todoListReducer
}
