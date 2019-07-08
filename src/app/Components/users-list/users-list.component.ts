import { Component, OnInit, ViewChild } from '@angular/core';
import { SaveUserService } from '../../services/save-user.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  dataSource;
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['userId', 'userName', 'emailId', 'phone', 'gender', 'status','actions'];

  constructor(private userService: SaveUserService,
    private router: Router,) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadUsersList();
  }


  loadUsersList(): void {

    this.userService.usersList().subscribe((data: any) => {
      this.ELEMENT_DATA = data.results;
      // console.log('elementData', this.ELEMENT_DATA);
      // console.log('data', data);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }),

      // tslint:disable-next-line:no-unused-expression
      err => {
        // this.toastr.error(err.error.message);
        console.log(err);
      };
  }

  editUser(regId: string): void {
    this.router.navigate(['editUser', regId]);
  }
}
