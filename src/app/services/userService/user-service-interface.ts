import { User } from "../../models/user";
import { Observable } from "rxjs";

export interface UserServiceInterface {

    isUserLoggedIn(): boolean;
    register(user: User): Observable<any>;
    getConnectedUsername(): string;
    getSingleUserById(userId: string): Observable<any>;
    getSingleUserByUsername(username: string): Observable<any>;
}
