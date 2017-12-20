import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../shared/todo';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {SelectTodo} from './store/actions/todo-list.actions';
import {AppState} from '../reducers/app.reducers';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todosState: Observable<{ todos: Todo[] }>;
  selectedTodo: Todo;
  selectedObsSubscriber: Subscription;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.todosState = this.store.select('todoList');
    this.selectedObsSubscriber = this.store.select('todoList').subscribe(
      (data) => {
        this.selectedTodo = data.selectedTodo;
        console.log('subscriber works');
      }
    );


  }

  onSelectTodo(todo: Todo) {
    this.store.dispatch(new SelectTodo(todo));
  }

  ngOnDestroy() {
    console.log('unsubscriber works')
    this.selectedObsSubscriber.unsubscribe();
  }

}
