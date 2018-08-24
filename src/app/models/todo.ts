import { TodoPriority } from "../enums/todo-priority.enum";
import { TodoState } from "../enums/todo-state.enum";
import { User } from "./user";
import { Category } from "./category";

export class Todo {

    id: number
    title: string
    description: string
    priority: TodoPriority
    state: TodoState
    creator: User
    category: Category

    constructor(){}
}