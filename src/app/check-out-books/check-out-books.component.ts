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
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['invId', 'orderId', 'bookName', 'userName', 'checkOutDate', 'dueDate', 'dueAmt', 'returnDate', 'status','totalAmtPaid'];
  checkOut: any ={};
  public amountPaid : any = [];
  comboBoxesDataCheckedStatus: any;

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
          console.log('elementData1',this.ELEMENT_DATA)
          console.log('data1',data)
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
    }),
      err => {
        // this.toastr.error(err.error.message);
      console.log(err);
      }

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

  updateBookStatus(index,objData,id): void {

    console.log("index",index)
    var obj={
      "checkoutId": objData.checkoutId,
	    "orderId": objData.orderId,
	    "bookId": objData.bookId,
      "inventoryId": objData.inventoryId,
      "userId": objData.userId,
		  "amountPaid": this.amountPaid[index],
		  "createdBy":objData.createdBy,
		  "checkedItatusId": id

    }
    this.checkOutBooksSerive.updateBookStatus(obj).subscribe((data: any) => {
          this.ELEMENT_DATA = data;
          console.log('bookStatus',data)
    }),
      err => {
        // this.toastr.error(err.error.message);
      console.log(err);
      }
    
  }
}
