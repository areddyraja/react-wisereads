import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../src/app/apiUrl';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private httpClient: HttpClient, private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue() {
    return this.currentUserSubject.value;
  }


  logIn(user) {
    const usercredentials = btoa(user.email + ':' + user.password);
    // localStorage.setItem('UserEmail', JSON.stringify(user));
    // localStorage.setItem('Token', usercredentials);

    const httpOptions = {
      params: new HttpParams().set(user.email, user.password),
    };
    return this.httpClient.post(AppSettings.URL + '/login', user, httpOptions).pipe(map((res: any) => {
      localStorage.setItem('currentUser', JSON.stringify(res));
      
      this.currentUserSubject.next(res);
      return res;
    }));
  }


  logout() {
    // remove user from local storage and set current user to null
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}
