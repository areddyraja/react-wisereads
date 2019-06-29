import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../src/app/apiUrl';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private httpClient: HttpClient, private router: Router
  ) { }

  logIn(user) {
    const usercredentials = btoa(user.email + ':' + user.password);
    localStorage.setItem('UserEmail', JSON.stringify(user));
    localStorage.setItem('Token', usercredentials);

    const httpOptions = {
      params: new HttpParams().set(user.email, user.password),
    };
    return this.httpClient.post(AppSettings.URL + 'login', user, httpOptions).pipe(map((res: Response) => {
      console.log('response', res.headers)
      return res;
    }));
  }
}
