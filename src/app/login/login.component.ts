import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// user: object = {
//   email: 'sai@omniwyse.com',
//   password: 'sai'
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
      // localStorage.setItem('name', data.resultsMap.userDetails.firstName)
      localStorage.setItem('Token', data.resultsMap.sessionToken);

      if (data.success === true) {
          this.router.navigateByUrl('/app-dashboard');
        // location.assign('/app-dashboard')
      } else {
        this.toastr.error('Invalid credentials');
      }
    },
      error => {
        // this.toastr.error(error.error.message);
        console.log(error);
      });
  }

}
