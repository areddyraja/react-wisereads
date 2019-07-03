
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { AppSettings } from '../apiUrl';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  baseUrl = `${AppSettings.URL}/api/books/search/`;

  constructor(private http: HttpClient) { }

  search(term) {

    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('Token'),
            })
          };
    const listOfBooks = this.http.get(this.baseUrl + term, httpOptions)
    .pipe(
        debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        map(
            (data: any) => {
                return (
                  data
                    // data.resultsMap.books.length! = 0 ? data as any[] : [{"tilte": "No Record Found"} as any]
                );
            }
    ));

    return listOfBooks;
}
}
