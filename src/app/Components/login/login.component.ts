import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// user: object = {
//   email: 'satish@omniwyse.com',
//   password: 'satish'
// };
user: object = {};

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService,

  ) { }

  ngOnInit() {
  }

  logIn() {
    this.router.navigateByUrl('/app-dashboard');
  }

  signIn(): void {
    this.loginService.logIn(this.user).subscribe((data: any) => {
      console.log(data, data.success);
      localStorage.setItem('Token', data.resultsMap.sessionToken);
      localStorage.setItem('roleId', data.resultsMap.userRoles[0].roleId);
      localStorage.setItem('UserId', data.resultsMap.userRoles[0].userId);
      localStorage.setItem('username',data.resultsMap.userRoles[0].createdBy);
      if (data.success === true) {
          this.router.navigateByUrl('/app-dashboard');
        // location.assign('/app-dashboard')
      } else {
        this.toastr.error('Invalid credentials');
      }
    },
      error => {
        this.toastr.error('please enter valid email and password');
        console.log(error);
      });
  }

}
