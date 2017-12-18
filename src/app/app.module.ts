import {AppComponent} from './app.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {LoggingServiceService} from './logging-service.service';
import {NgModule} from '@angular/core';
import {TodoServiceService} from './todo-service.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoDetailsComponent,
    TodoListComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggingServiceService, TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
