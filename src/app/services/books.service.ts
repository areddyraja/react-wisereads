import { AddBooks } from './../models/add-books';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient, ) { }

  AddBooks(books: AddBooks) {
    return this.http.post<AddBooks[]>(`http://13.127.158.42/admin/api/books`, books);
  }

}
