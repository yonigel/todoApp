import { TodoPriority } from "../enums/todo-priority.enum";
import { TodoState } from "../enums/todo-state.enum";
import { User } from "./user";
import { Category } from "./category";

export class Todo {

    id: string
    title: string
    description: string
    priority: TodoPriority
    state: TodoState
    creator: User
    categoryId: string
    isDone: boolean;
    createdBy: string;

    constructor(id: string, title: string, description: string, isDone: boolean, categoryId: string, createdBy: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.categoryId = categoryId;
        this.createdBy = createdBy;

    }
}