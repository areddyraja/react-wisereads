import { Component, OnInit, ViewChild } from '@angular/core';
import { SaveUserService } from '../services/save-user.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-check-out-books',
  templateUrl: './check-out-books.component.html',
  styleUrls: ['./check-out-books.component.scss']
})
export class CheckOutBooksComponent implements OnInit {
  dataSource;
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['invId', 'orderId', 'bookName', 'userName', 'checkOutDate', 'dueDate', 'dueAmt', 'returnDate', 'status'];
checkOut: object ={};

  constructor(private userService: SaveUserService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadUsersList();
  }


  loadUsersList(): void {
    // this.spinner.show();
    // this.leavesHistoryArray = [];

    // if (this.role == 'ROLE_HR_ADMIN') {
    //   this.dataSource = [];
    // }

    this.userService.checkOutBooksList().subscribe((data: any) => {

      // if (response == null) {
      // }
      // else {
        // Object.keys(response).forEach(key => {
          // this.leavesHistoryArray.push(response[key]);
          this.ELEMENT_DATA = data.results;
          
          console.log('elementData1',this.ELEMENT_DATA)
          console.log('data1',data)

          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        // });
        // if (this.leavesHistoryArray.length == 0) {
        //   this.message = "No Data Found!!!"
        //   this.spinner.hide();
        // }
      // }

      // if (response.length !== 0) {
      //   this.spinner.hide();
      // }

    }),

      err => {
        // this.toastr.error(err.error.message);
      console.log(err);
      }

  }
}
