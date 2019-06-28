import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:Object={
  email:'sai@omniwyse.com',
  password:'sai'
};
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService,

  ) { }

  ngOnInit() {
  }

  logIn(){
    this.router.navigateByUrl('/app-dashboard');
  }

  signIn(): void {
    this.loginService.logIn(this.user).subscribe((data: any) => {
      console.log(data,data.success);
      localStorage.setItem("name",data.resultsMap.userDetails.firstName)
     
      if (data.success==true) {
          this.router.navigateByUrl('/app-dashboard');
        // location.assign('/app-dashboard')
        
      } else {
        this.toastr.error("Invalid credentials");
      }
    },
      error => {
        this.toastr.error(error.error.message);
      });
  }

}
