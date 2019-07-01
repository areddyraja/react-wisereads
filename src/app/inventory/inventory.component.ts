import { InventoryService } from './../services/inventory.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  displayedColumns: string[] = ['invid', 'bookid', 'bookname', 'owner', 'bookvalue', 'rantalvalue', 'availability', 'influencer', 'action'];

  dataSource;
  ELEMENT_DATA = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private inventoryService: InventoryService, private http: HttpClientModule) {}


  getinventory() {
    this.inventoryService.getinventory().subscribe((data: any) => {
      console.log(data);
      this.ELEMENT_DATA = data.results;
      console.log('elementData', this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }


  ngOnInit() {
    this.getinventory();
  }

}
