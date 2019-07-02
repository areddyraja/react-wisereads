import { Component, OnInit, ViewChild } from '@angular/core';
import { SaveUserService } from '../services/save-user.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CheckOutBookService } from '../services/check-out-book.service';

@Component({
  selector: 'app-check-out-books',
  templateUrl: './check-out-books.component.html',
  styleUrls: ['./check-out-books.component.scss']
})
export class CheckOutBooksComponent implements OnInit {
  dataSource;
  dropDownSearch;
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = ['invId', 'orderId', 'bookName', 'userName', 'checkOutDate', 'dueDate', 'dueAmt', 'returnDate', 'status',
  'totalAmtPaid'];
  checkOut: any = {};
  public amountPaid: any = [];
  comboBoxesDataCheckedStatus: any;
  allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));

  constructor(
    private checkOutBooksSerive: CheckOutBookService,
    private toastr: ToastrService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadUsersList();
    this.loadComboCheckedStatus();
  }


  loadUsersList(): void {

    this.checkOutBooksSerive.checkOutBooksList().subscribe((data: any) => {
          this.ELEMENT_DATA = data.results;
          console.log('elementData1', this.ELEMENT_DATA);
          console.log('data1', data);
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
    });
  }

  loadUsersListSearch(search) {

    this.checkOutBooksSerive.checkOutBooksList().subscribe((data: any) => {
      this.ELEMENT_DATA = data.results;
      this.dataSource = new MatTableDataSource(search);
      this.dataSource.paginator = this.paginator;
});
  }

  loadComboCheckedStatus() {

    const body = [
      'bookCheckedStatus'
    ];
    this.checkOutBooksSerive.loadComboCheckedStatus(body).subscribe(
      (data: any) => {
        if (data) {
          console.log('comboCheckedStatus', data);
          this.comboBoxesDataCheckedStatus = data.result.bookCheckedStatus;
        }
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  updateBookStatus(index, objData, id): void {

    console.log('index', index);
    const obj = {
      checkoutId: objData.checkoutId, orderId: objData.orderId, bookId: objData.bookId,
      inventoryId: objData.inventoryId,
      userId: objData.userId, amountPaid: this.amountPaid[index], createdBy: objData.createdBy, checkedItatusId: id
    };
    this.checkOutBooksSerive.updateBookStatus(obj).subscribe((data: any) => {
          this.ELEMENT_DATA = data;
          console.log('bookStatus', data);
    });
  }

  check(event: KeyboardEvent): void {
    // 31 and below are control keys, don't block them.
    if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      // alert(event.keyCode)
      if (!((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode === 37) || (event.keyCode === 39))) {
        event.preventDefault();
      }
    }
  }

  applyFilter(filterValue: string): void {
  //   const tableFilters = [];
  //   tableFilters.push({
  //     id: 'orderId',
  //     value: filterValue
  //   });


  //   this.dataSource.filter = JSON.stringify(tableFilters);
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
// console.log(this.dataSource)
// this.ELEMENT_DATA.filter = filterValue;

     this.dropDownSearch = this.ELEMENT_DATA.filter((item) => item.checkedItatusId === filterValue);
     this.loadUsersListSearch(this.dropDownSearch);
  }

}
