import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoServiceService} from '../todo-service.service';
import {Subscription} from 'rxjs/Subscription';
import {LoggingServiceService} from '../logging-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  selectedTodoObsSubscription: Subscription;
  allTodosObsSubscription: Subscription;

  selectedTodo: Todo;
  todos: Todo[];

  constructor(private todoService: TodoServiceService, private loggingService: LoggingServiceService) {
  }

  ngOnInit() {

    this.todos = this.todoService.getTodos();
    this.selectedTodo = this.todos[0];

    this.allTodosObsSubscription = this.todoService.todosChanged.subscribe(
      (t: Todo[]) => {
        this.todos = t;
      }
    );
    this.selectedTodoObsSubscription = this.todoService.selectedTodoChanged.subscribe(
      (todo: Todo) => {
        this.loggingService.log('Selected ToDo changed , ID :' + todo.id);
        this.selectedTodo = todo;
      }
    );
  }

  onSelectTodo(todo: Todo) {
    console.log(todo);
    this.todoService.selectedTodoChanged.next(todo);
  }

  ngOnDestroy() {
    this.loggingService.log('onDestroy ,unsubscribed! Subcriptions');
    this.selectedTodoObsSubscription.unsubscribe();
    this.allTodosObsSubscription.unsubscribe();
  }
}
