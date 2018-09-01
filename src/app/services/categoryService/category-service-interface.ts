import { User } from "../../models/user";
import { Category } from "../../models/category";
import { Observable } from "rxjs";

export interface CategoryServiceInterface {

    getCategoriesByUser(user: User): Observable<any>;
    getCategoryById(id: string): Observable<any>;
    addPermittedUser(user: string, category: Category): Observable<any>;
    removePermittedUser(user: string, category: Category): Observable<any>;
    createCategory(category: Category): Observable<any>;
    deleteCategory(category: Category): Observable<any>;
}
