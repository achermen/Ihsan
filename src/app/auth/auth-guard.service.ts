import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(): boolean {
        console.log('canActivate');
        if (!this.auth.isAuthenticated()) {
            console.log('Not authenticated');
            this.router.navigate(['auth']);
            return false;
        }
        console.log('Authenticated');
        return true;
    }
}