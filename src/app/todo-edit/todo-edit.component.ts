import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers/app.reducers';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Todo} from '../shared/todo';
import {NgForm} from '@angular/forms';
import {EditTodo} from '../todo-list/store/actions/todo-list.actions';

@Component({
    selector: 'app-todo-edit',
    templateUrl: './todo-edit.component.html',
    styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {

    constructor(private  route: ActivatedRoute,
                private router: Router,
                private store: Store<AppState>) {
    }

    paramObssubscriber: Subscription;
    findTodoObsSubscription: Subscription;
    id: number;

    todo: Todo;
    @ViewChild('f') formEditTodo: NgForm;

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

    public onSubmit() {
        const todo = new Todo(
            Math.random(),
            this.formEditTodo.controls.name.value,
            this.formEditTodo.controls.desc.value
        );
        this.store.dispatch(new EditTodo(todo));
        this.router.navigate(['/todos']);
    }

    ngOnDestroy() {
        console.log('unsubscriber works');
        this.paramObssubscriber.unsubscribe();
        this.findTodoObsSubscription.unsubscribe();
    }
}
