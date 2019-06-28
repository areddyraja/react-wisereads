import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BooksService } from './../services/books.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})


export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['bookid', 'bookname', 'author', 'gnere', 'publisher', 'owner', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  file: File = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private bookservice: BooksService, private http: HttpClient) {}

  // onFileChange(file: FileList) {
  //   this.file = file.item(0);
  // }

  // onSubmit(uploadFile) {
  //   this.bookservice.uploadfile(this.file).subscribe((data => {
  //     console.log(data);
  //   }));
  // }
  selectedFile: File = null;

  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
  }


  onUpload() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': undefined,
        Authorization: 'Basic ' + localStorage.getItem('Token'),
        })
      };
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://13.127.158.42/api/books/upload-books-file', fd, httpOptions). subscribe((data => {
      console.log(data);
    }));
  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

const ELEMENT_DATA: PeriodicElement[] = [
  // tslint:disable-next-line:max-line-length
  {bookid: 'WIR2345', bookname: 'The Naked Economics', author: 'Charles Wheelan', gnere: 'Education', publisher: 'Norton & Company', owner: 'omniwyse' },
  // tslint:disable-next-line:max-line-length
  {bookid: 'WIR2346', bookname: 'Corporate Chanakya', author: 'Charles Wheelan', gnere: 'Education', publisher: 'jaico', owner: 'omniwyse' },
  {bookid: 'WIR2347', bookname: 'Hydrogen', author: 'Charles Wheelan', gnere: 'Education', publisher: 'jaico', owner: 'omniwyse' },
];
