import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../apiUrl';

@Injectable({
  providedIn: 'root'
})
export class SaveUserService {

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
    }),
  };


  loadComboDropDowns(body) {
    return this.httpClient.post(AppSettings.URL + '/api/combo-box-tables', body, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  saveuser(adduser: any) {
    return this.httpClient.post(AppSettings.URL + '/api/users', adduser, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  loaduser(regId) {
    return this.httpClient.get(AppSettings.URL + `/api/users/${regId}`, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  edituser(edituser: any) {
    return this.httpClient.put(AppSettings.URL + `/api/users/${edituser.userId}`, edituser, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  usersList() {
    return this.httpClient.get(AppSettings.URL + '/api/users', this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  checkOutBooksList() {
    return this.httpClient.get(AppSettings.URL + '/api/checked-out-books', this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }
}
