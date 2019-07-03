import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BooksService } from '../../services/books.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})


export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['bookid', 'bookname', 'author', 'gnere', 'publisher', 'owner'];

  dataSource;
  ELEMENT_DATA = [];
  file: File = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private bookservice: BooksService, private http: HttpClient) {}

  selectedFile: File = null;

  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile.name);
  }


  onUpload() {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': undefined,
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
        })
      };
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://13.127.158.42/api/books/upload-books-file', fd, httpOptions). subscribe((data => {
      // console.log(data);
    }));
  }


  getbooks() {
    this.bookservice.getbooks().subscribe((data: any) => {
      // console.log(data);
      this.ELEMENT_DATA = data.resultsMap.books;
      console.log('elementData', this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }


  ngOnInit() {
    this.getbooks();
  }

}

export interface PeriodicElement {
  bookname: string;
  bookid: string;
  author: string;
  gnere: string;
  publisher: string;
  owner: string;
}
