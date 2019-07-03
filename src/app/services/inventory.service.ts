import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../apiUrl';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getinventory() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
        })
      };
    return this.http.get(`${AppSettings.URL}/api/inventory-books`, httpOptions).pipe( map((res: Response) => {
      return res;
      }));
  }
}
