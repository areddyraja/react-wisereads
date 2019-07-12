import { LoginService } from './../services/login.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: LoginService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        const Token = localStorage.getItem('Token');
        if (currentUser && Token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${Token}`
                }
            });
        }

        return next.handle(request);
    }
}
