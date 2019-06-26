import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { AppSettings } from '../../../src/app/apiUrl';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  logIn(user): Observable<Response> {
    const usercredentials = btoa(user.email + ':' + user.password);
    localStorage.setItem("UserEmail", JSON.stringify(user));
    localStorage.setItem("Token", usercredentials);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + usercredentials,
      })
    };
    return this.httpClient.post(AppSettings.URL + 'login', user, httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  
}
