import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { UserService } from "../services/userService/user.service";


@Injectable()
export class UserAlreadyConnectedGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.userService.isUserLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}