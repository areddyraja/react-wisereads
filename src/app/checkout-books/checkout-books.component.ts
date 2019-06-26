import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-checkout-books',
  templateUrl: './checkout-books.component.html',
  styleUrls: ['./checkout-books.component.scss']
})
export class CheckoutBooksComponent implements OnInit {

  displayedColumns: string[] = ['bookid', 'bookname', 'author', 'gnere', 'publisher', 'owner', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

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

