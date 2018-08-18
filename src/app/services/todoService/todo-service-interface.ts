import { Todo } from "../../models/todo";
import { Observable } from "rxjs";

export interface TodoServiceInterface {

    getTodos(): Observable<any>
    getSingleTodo(todoID: number): Observable<any>
    deleteTodo(todoID: number)
    addTodo()
}
