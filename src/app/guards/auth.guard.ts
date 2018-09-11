import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../services/userService/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

    private readonly LOGIN_PATH = '/main';

    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if (this.userService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate([this.LOGIN_PATH], {queryParams: {returnedUrl: state.url}})
            return false;
        }
    }
}
