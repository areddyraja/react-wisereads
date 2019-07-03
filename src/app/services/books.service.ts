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

  AddBooks(books: AddBooks) {
    return this.http.post<AddBooks[]>(`http://13.127.158.42/admin/api/books`, books);
  }

  getbooks() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
        })
      };
    return this.http.get(`${AppSettings.URL}/api/books`, httpOptions).pipe( map((res: Response) => {
      return res;
      }));
  }


  getbooksdetails(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
        })
      };
    return this.http
    .get<AddBooks[]>(`${AppSettings.URL}/api/books` + id , httpOptions);
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProduct(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
        })
      };
    return this.http.get(`${AppSettings.URL}/api/books` + id, httpOptions).pipe(
      map(this.extractData));
  }
  
  // uploadfile(file: any) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': undefined,
  //       Authorization: 'Basic ' + localStorage.getItem('Token'),
  //       })
  //     };
  //   const formData: FormData = new FormData();

  //   formData.append('file', file, file.name);

  //   return this.http.post(AppSettings.URL + 'api/books/upload-books-file', formData, httpOptions);
  // }
}
