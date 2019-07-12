import { AddBooks } from './../models/add-books';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { AppSettings } from '../apiUrl';
import { GetBooks } from '../models/get-books';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  id: any;
  private sub: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
    }),
  };



  AddBooks(books: any) {
    return this.http.post(AppSettings.URL + '/api/books', books, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  editbook(editbook: any) {
      return this.http.put(AppSettings.URL + `/api/books/${editbook.bookId}`, editbook, this.httpOptions).pipe(map((res: Response) => {
        return res;
      }));
    }

  loadbook(regId) {
    return this.http.get(AppSettings.URL + `/api/books/${regId}`, this.httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }

  getbooks() {
    return this.http.get(`${AppSettings.URL}/api/books`, this.httpOptions).pipe( map((res: Response) => {
      return res;
      }));
  }


  getbooksdetails(id) {
    return this.http
    .get<AddBooks[]>(`${AppSettings.URL}/api/books/` + id , this.httpOptions);
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProduct(id): Observable<any> {
    return this.http.get(`${AppSettings.URL}/api/books/` + id, this.httpOptions).pipe(
      map(this.extractData));
  }
  
}
