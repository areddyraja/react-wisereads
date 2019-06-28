import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../src/app/apiUrl';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

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

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     // tslint:disable-next-line:object-literal-key-quotes
    //     'Authorization': 'Basic ' + usercredentials,
    //   })
    // };
    const httpOptions = {
      params: new HttpParams().set(user.email, user.password ),
      // headers: new HttpHeaders().getAll('Authorization')
      };
    return this.httpClient.post(AppSettings.URL + 'login', user, httpOptions).pipe(map((res: Response) => {
      console.log('response',res.headers)
      return res;
    }));


  //   axios.post(AppSettings.URL + 'login', user )
  //   .then(function (response) {
  //     console.log(response,response.headers);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
  }
}
