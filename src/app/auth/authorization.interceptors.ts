import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable()

export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const loginData: string = localStorage.getItem('Token');
    if (loginData) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + loginData) });
    }
    // Clone the request to add the new header
    return next.handle(request);
  }
}
