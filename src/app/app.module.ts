import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainTodoComponent } from './components/todo/main-todo/main-todo.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { AddTodoComponent } from './components/todo/add-todo/add-todo.component';
import { EditTodoComponent } from './components/todo/edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './components/todo/delete-todo/delete-todo.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  { 
    path: 'todos', 
    component: MainTodoComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainTodoComponent,
    TodoListComponent,
    AddTodoComponent,
    EditTodoComponent,
    DeleteTodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
