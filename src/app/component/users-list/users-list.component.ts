import { Component, OnInit, ViewChild } from '@angular/core';
import { SaveUserService } from '../../services/save-user.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  dataSource;
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['userId', 'userName', 'emailId', 'phone', 'gender', 'status', 'actions'];

  constructor(private userService: SaveUserService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.loadUsersList();
  }


  loadUsersList(): void {

    this.userService.usersList().subscribe((data: any) => {
      this.ELEMENT_DATA = data.results;
      console.log('elementData', this.ELEMENT_DATA)
      console.log('data', data)
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }),

      err => {
        // this.toastr.error(err.error.message);
        console.log(err);
      }
  }
}
