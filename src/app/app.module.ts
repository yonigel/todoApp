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
import { RegisterComponent } from './components/register/register.component';
import { UserAlreadyConnectedGuard } from './guards/userAlreadyConnected.guard';
import { RegistrationSucceededComponent } from './components/registration-succeeded/registration-succeeded.component';
import { CategoryPreviewComponent } from './components/categories/category-preview/category-preview.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { DeleteCategoryModalComponent } from './components/categories/delete-category-modal/delete-category-modal.component';
import { AddTodoModalComponent } from './components/todo/add-todo-modal/add-todo-modal.component';
import { MainComponent } from './components/mainView/main/main.component';


const appRoutes: Routes = [
  { 
    path: 'todos', 
    component: MainTodoComponent,
    canActivate: [AuthGuard]
  },
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent, canActivate: [UserAlreadyConnectedGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'registrationSucceede', component: RegistrationSucceededComponent},
  { path: 'categoryPreview', component: CategoryPreviewComponent, canActivate: [AuthGuard]},
  { path: 'addCategory', component: AddCategoryComponent, canActivate: [AuthGuard]},
  { path: '',
    redirectTo: '/main',
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
    LoginComponent,
    RegisterComponent,
    RegistrationSucceededComponent,
    CategoryPreviewComponent,
    AddCategoryComponent,
    DeleteCategoryModalComponent,
    AddTodoModalComponent,
    MainComponent
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
    AuthGuard,
    UserAlreadyConnectedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
