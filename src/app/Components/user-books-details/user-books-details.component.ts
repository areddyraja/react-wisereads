import { Component, OnInit, ViewChild } from '@angular/core';
import { SaveUserService } from '../../services/save-user.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CheckOutBookService } from '../../services/check-out-book.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-books-details',
  templateUrl: './user-books-details.component.html',
  styleUrls: ['./user-books-details.component.scss']
})
export class UserBooksDetailsComponent implements OnInit {

  id: any;
  dataSource;
  dropDownSearch;
  ELEMENT_DATA: any;
  displayedColumns: string[] = ['orderId', 'bookName', 'checkOutDate', 'dueDate', 'dueAmt', 'returnDate', 'status',
  'totalAmtPaid'];
  checkOut: any = {};
  public amountPaid: any = [];
  comboBoxesDataCheckedStatus: any;
  allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));

  constructor(
              private checkOutBooksSerive: CheckOutBookService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private checkoutService: CheckOutBookService
              ) 
              { 
                // this.id = this.route.snapshot.paramMap.get('id');
                // console.log(this.id);
              }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadUsersList();
    this.loadComboCheckedStatus();
  }


  loadUsersList(): void {
    this.checkoutService.userBookList(this.route.snapshot.params.id).subscribe((data: any) => {
      console.log(data);
      this.ELEMENT_DATA = data.results;
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
          // console.log('comboCheckedStatus', data);
          this.comboBoxesDataCheckedStatus = data.result.bookCheckedStatus;
        }
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  updateBookStatus(index, objData, id): void {
    // console.log('index', index);
    const obj = {
      checkoutId: objData.checkoutId, orderId: objData.orderId, bookId: objData.bookId,
      inventoryId: objData.inventoryId,
      userId: objData.userId, amountPaid: this.amountPaid[index], createdBy: objData.createdBy, checkedItatusId: id
    };
    this.checkOutBooksSerive.updateBookStatus(obj).subscribe((data: any) => {
          this.ELEMENT_DATA = data;
          // alert(data.message)
          this.toastr.success('Status Updated Successfully');
          // console.log('bookStatus', data);
          this.loadUsersList();
    }),
      // tslint:disable-next-line:no-unused-expression
      err => {
        this.toastr.error(err.error.message);
      };
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

