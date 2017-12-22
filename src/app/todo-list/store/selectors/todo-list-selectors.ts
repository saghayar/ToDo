
import {AppState} from '../../../reducers/app.reducers';

export const getTodoState = (state: AppState) => state.todoList;
export const getCompletedTodos = (state: AppState) => state.todoList.todos.filter(t => t.completed);
export const getUnCompleted = (state: AppState) => state.todoList.todos.filter(todo => !todo.completed);
export const getAllTodos = (state: AppState) => state.todoList.todos;
