import { AuthService } from './../_sevices/auth.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_sevices/alertify.service';
import { UserService } from '../_sevices/user.service';
import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
    constructor(private userService: UserService, private authService: AuthService,
                private router: Router, private alert: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alert.error('Problem retriving your data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
