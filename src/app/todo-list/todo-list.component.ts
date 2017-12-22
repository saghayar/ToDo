import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../shared/todo';
import {Store} from '@ngrx/store';
import * as todoActions from './store/actions/todo-list.actions';
import * as todoSelectors from './store/selectors/todo-list-selectors';
import {AppState} from '../reducers/app.reducers';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {getAllTodos} from './store/selectors/todo-list-selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  selectedTodo: Todo;
  selectedObsSubscriber: Subscription;
  filterText: string;

  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    this.selectedObsSubscriber = this.store.select(todoSelectors.getTodoState).subscribe(
      (data) => {
        this.selectedTodo = data.selectedTodo;
        console.log('subscriber works');
      }
    );
    this.showAll();
  }

  onSelectTodo(todo: Todo) {
    this.store.dispatch(new todoActions.SelectTodo(todo));
  }

  onDeleteTodo() {
    this.store.dispatch(new todoActions.DeleteTodo(this.selectedTodo));
  }


  onChangeStatus() {
    this.selectedTodo.completed = !this.selectedTodo.completed;
    this.store.dispatch(new todoActions.SetTodoStatus(this.selectedTodo.id, !this.selectedTodo.completed));
  }

  ngOnDestroy() {
    console.log('unsubscriber works');
    this.selectedObsSubscriber.unsubscribe();
  }

  showCompleted() {
    this.store.select(todoSelectors.getCompletedTodos).subscribe(todos => {
      this.todos = todos;
    });
  }

  showUnCompleted() {
    this.store.select(todoSelectors.getUnCompleted).subscribe(todos => {
      this.todos = todos;
    });
  }

  showAll() {
    this.store.select(getAllTodos).subscribe(todos => {
      this.todos = todos;
    });
  }

}
