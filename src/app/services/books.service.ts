import { AddBooks } from './../models/add-books';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { AppSettings } from '../apiUrl';
import { GetBooks } from '../models/get-books';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

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
    return this.http.get('http://13.127.158.42/api/books', httpOptions).pipe( map((res: Response) => {
      return res;
      }));
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
