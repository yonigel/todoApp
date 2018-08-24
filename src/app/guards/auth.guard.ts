import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../services/userService/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        var result: boolean
        if (this.userService.isUserLoggedIn()) {
            result = true
        }
        else {
            result = false
            this.router.navigate(['/login'], {queryParams: {returnedUrl: state.url}})
        }
        result = this.userService.isUserLoggedIn()
        return result
    }
}
