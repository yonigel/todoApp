import { Todo } from "../../models/todo";
import { Observable } from "rxjs";

export interface TodoServiceInterface {

    getTodosByCategory(categoryId: string): Observable<any>;
    getSingleTodo(todoID: string): Observable<any>;
    deleteTodoById(todoID: string): Observable<any>;
    deleteTodoByCategory(categoryId: string): Observable<any>;
    createTodo(todo: Todo): Observable<any>;
    updateTodo(todoId: string, newTodo: Todo): Observable<any>;
}
