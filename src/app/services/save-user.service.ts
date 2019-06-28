import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../apiUrl';

@Injectable({
  providedIn: 'root'
})
export class SaveUserService {

  constructor(private httpClient: HttpClient) { }

  saveuser(adduser: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
      })
    };
    return this.httpClient.post(AppSettings.URL + 'api/users', adduser, httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  loadComboDropDowns(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
//     let body = new HttpParams();
// body = body.set('username', USERNAME);
          //  body: ["roles","bookGenre","gender","bookCondition"]
    // const body =
    //   ["roles","bookGenre","gender","bookCondition"]
    return this.httpClient.post(AppSettings.URL + 'api/combo-box-tables', body, httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }


  usersList(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpClient.get(AppSettings.URL + 'api/users', httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  checkOutBooksList(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
      }),
    };
    return this.httpClient.get(AppSettings.URL + 'api/checked-out-books', httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }
}
