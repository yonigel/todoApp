import { TodoPriority } from "../enums/todo-priority.enum";
import { TodoState } from "../enums/todo-state.enum";
import { User } from "./user";

export class Todo {

    id: number
    title: string
    description: string
    priority: TodoPriority
    state: TodoState
    creator: User

    constructor(){}
}