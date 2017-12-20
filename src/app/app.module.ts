import {AppComponent} from './app.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {LoggingServiceService} from './shared/logging-service.service';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {reducers} from './reducers/app.reducers';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

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
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [LoggingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
