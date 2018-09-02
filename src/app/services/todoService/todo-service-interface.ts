import { Todo } from "../../models/todo";
import { Observable } from "rxjs";

export interface TodoServiceInterface {

    getTodosByCategory(categoryId: string): Observable<any>;
    getSingleTodo(todoID: string): Observable<any>;
    deleteTodo(todoID: string): Observable<any>;
    createTodo(todo: Todo): Observable<any>;
    updateTodo(todoId: string, newTodo: Todo): Observable<any>;
}
