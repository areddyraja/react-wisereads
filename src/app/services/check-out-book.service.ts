import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../apiUrl';

@Injectable({
  providedIn: 'root'
})

export class CheckOutBookService {

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
    }),
  };
  loadComboCheckedStatus(body) {
    return this.httpClient.post(AppSettings.URL + 'api/combo-box-tables', body, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  checkOutBooksList() {
    return this.httpClient.get(AppSettings.URL + 'api/checked-out-books', this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  updateBookStatus(obj) {
    return this.httpClient.put(AppSettings.URL + 'api/checked-out-books/order-details/book-status', obj, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }
}
