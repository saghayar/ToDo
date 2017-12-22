import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Todo} from '../shared/todo';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers/app.reducers';
import {AddTodo} from '../todo-list/store/actions/todo-list.actions';

@Component({
    selector: 'app-todo-create',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

    todo: Todo;
    @ViewChild('f') formCreateTodo: NgForm;

    constructor(private router: Router, private store: Store<AppState>) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.todo = new Todo(
            Math.random(),
            this.formCreateTodo.controls.name.value,
            this.formCreateTodo.controls.desc.value,
            false
        );
        console.log(this.todo);
        this.store.dispatch(new AddTodo(this.todo));
        this.router.navigate(['/todos']);
    }

}
