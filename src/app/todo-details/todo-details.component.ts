import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../shared/todo';
import {ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers/app.reducers';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit, OnDestroy {

  constructor(private  route: ActivatedRoute, private store: Store<AppState>) {
  }

  paramObssubscriber: Subscription;
  findTodoObsSubscription: Subscription;
  id: number;

  todo: Todo;

  ngOnInit() {
    this.paramObssubscriber = this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
      }
    );

    this.findTodoObsSubscription = this.store.select('todoList').subscribe(
      (data) => {
        if (this.id > -1) {
          this.todo = data.todos.find(t => t.id === this.id);
        }
      }
    );
  }

  ngOnDestroy() {
    console.log('unsubscriber works');
    this.paramObssubscriber.unsubscribe();
    this.findTodoObsSubscription.unsubscribe();
  }

}
