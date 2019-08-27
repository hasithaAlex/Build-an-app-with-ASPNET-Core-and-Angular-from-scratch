import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
    constructor(private userService: UserService,
        private route: Router,
        private alertyService: AlertifyService,
        private authService: AuthService) {}

        debugger;
        resolve(route: ActivatedRouteSnapshot): Observable<User> {
            return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
                catchError(error => {
                    this.alertyService.error('Problem retrieving your data');
                    this.route.navigate(['/members']);
                    return of(null);
                })
            );
        }
}