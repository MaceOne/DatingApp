import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_sevices/alertify.service';
import { UserService } from '../_sevices/user.service';
import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    pageNumber = 1;
    pageSize = 5;
    constructor(private userService: UserService, private router: Router, private alert: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alert.error('Problem retriving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
