import { Component, OnInit } from '@angular/core';
import { SaveUserService } from '../services/save-user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUser: any = {};
  minDate2 = new Date(
    new Date().getFullYear() - 50,
    new Date().getMonth() - 2,
    1
  );
  maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  comboBoxesDataGender: any;
  comboBoxesDataRole: any;
  comboBoxesDataStatus: any;
  constructor(
    private saveUserService: SaveUserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadComboBoxes();
  }
  saveUser() {
    this.addUser.createdBy = localStorage.getItem('name');
    this.saveUserService.saveuser(this.addUser).subscribe(
      (data: any) => {
        console.log('addUser Object', this.addUser);
        if (data) {
          this.toastr.success('Added User Successfully');
          this.router.navigateByUrl('/app-dashboard');
        }
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  loadComboBoxes() {
    const body = [
      'roles',
      'bookGenre',
      'gender',
      'bookCondition',
      'userStatus'
    ];
    this.saveUserService.loadComboDropDowns(body).subscribe(
      (data: any) => {
        if (data) {
          console.log('comboDropDowns', data);
          this.comboBoxesDataGender = data.result.gender;
          this.comboBoxesDataRole = data.result.roles;
          this.comboBoxesDataStatus = data.result.userStatus;
        }
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  comboGender($event, id): void {
    if ($event.source.selected) {
      this.addUser.genderId = id.gender_id;
    }
  }

  comboRoles($event, id): void {
    if ($event.source.selected) {
      this.addUser.roleId = id.role_id;
    }
  }

  comboStatus($event, id): void {
    if ($event.source.selected) {
      this.addUser.userStatusId = id.user_status_id;
    }
  }
}
