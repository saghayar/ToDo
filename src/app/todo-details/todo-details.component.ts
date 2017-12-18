import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {ActivatedRoute, Params} from '@angular/router';
import {TodoServiceService} from '../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor(private  route: ActivatedRoute, private  todoService: TodoServiceService) {
  }

  id: number;

  todo: Todo;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.todo = this.todoService.getTodoById(this.id);
      }
    );
  }


}
