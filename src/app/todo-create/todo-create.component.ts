import {Component, OnInit, ViewChild} from '@angular/core';
import {LoggingServiceService} from '../logging-service.service';
import {NgForm} from '@angular/forms';
import {TodoServiceService} from '../todo-service.service';
import {Todo} from '../todo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  todo: Todo;
  @ViewChild('f') formCreateTodo: NgForm;

  constructor(private  todoService: TodoServiceService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.todo = new Todo(
      +this.formCreateTodo.controls.id.value,
      this.formCreateTodo.controls.name.value,
      this.formCreateTodo.controls.desc.value
    );
    this.todoService.addTodo(this.todo);
    this.router.navigate(['todos', this.todo.id]);
  }

}
