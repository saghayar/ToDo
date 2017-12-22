import {NgModule} from '@angular/core';
import {TodoListComponent} from './todo-list/todo-list.component';
import {RouterModule, Routes} from '@angular/router';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/todos', pathMatch: 'full'},
    {path: 'todos', component: TodoListComponent},
    {path: 'todos/new', component: TodoCreateComponent},
    {path: 'todos/:id', component: TodoDetailsComponent},
    {path: 'todos/:id/edit', component: TodoEditComponent}
  ]
;


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
