import {Injectable, OnInit} from '@angular/core';
import {LoggingServiceService} from './logging-service.service';
import {Todo} from './todo';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TodoServiceService implements OnInit {

  private todos = [
    new Todo(1, 'Birthday Party', ' Birthday prty for my friend'),
    new Todo(2, 'Hackaton event', 'Event for challaing up Java ME'),
    new Todo(3, 'Finishing up angular staffs', 'Learning Angular features for project')
  ];

  selectedTodoChanged = new Subject<Todo>();
  todosChanged = new Subject<Todo []>();

  constructor(private logService: LoggingServiceService) {
  }

  ngOnInit() {
  }


  getTodos(): Todo[] {
    return this.todos.slice();
  }

  getTodo(selectedTodo: Todo): Todo {
    this.logService.log('selected todo = ' + selectedTodo.id);
    return this.todos.find(todo => todo.id === selectedTodo.id);
  }

  getTodoById(id: number): Todo {
    this.logService.log('selected todo = ' + id);
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos);
    this.logService.log('new Todo Created');
    this.logService.log(todo);
  }
}
