import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../src/app/apiUrl';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  saveuser(adduser: any) {
    return this.httpClient.post(AppSettings.URL + '/api/users', adduser).pipe(map((res: Response) => {
      return res;
    }));
  }

}
