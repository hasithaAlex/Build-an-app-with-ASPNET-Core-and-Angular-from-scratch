import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    constructor(private userService: UserService,
        private route: Router,
        private alertyService: AlertifyService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
            return this.userService.getUsers().pipe(
                catchError(error => {
                    this.alertyService.error('Problem retrieving data');
                    this.route.navigate(['/home']);
                    return of(null);
                })
            );
        }
}