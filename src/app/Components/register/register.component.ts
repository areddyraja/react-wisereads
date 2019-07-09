import { Component, OnInit } from '@angular/core';
import { SaveUserService } from 'src/app/services/save-user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  addUser: any = {};
  comboBoxesDataGender: any;
  registerForm: FormGroup;
  submitted = false;

  gender: any = [{
    gender_id: 1,
    gender: 'male'
  },
  {
    gender_id: 2,
    gender: 'female'
  },
];
  constructor( private saveUserService: RegisterService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      genderId: ['', Validators.required],
      contactNumber: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      company: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  } ,{
    validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls; }

  saveUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
            return;
    }
    this.addUser.createdBy = this.addUser.firstName;
    this.addUser.userStatusId = '1';
    this.addUser.roleId = '4';
    this.saveUserService.saveuser(this.addUser).subscribe(
      (data: any) => {
        // console.log('register', data);
        console.log(data.message)
        if (data && data.resultsMap && data.resultsMap.user) {
          this.toastr.success('Registration Successfully');
          this.router.navigateByUrl('/app-dashboard');
        } 
        
          this.toastr.warning("Email already registered");
      
      },
      error => {
        // console.log(error.message)
        this.toastr.warning("Email already registered");
      }
    );
  }

  // loadComboBoxes() {
  //   const body = [
  //     'roles',
  //     'bookGenre',
  //     'gender',
  //     'bookCondition',
  //     'userStatus'
  //   ];
  //   this.saveUserService.loadComboDropDowns(body).subscribe(
  //     (data: any) => {
  //       if (data) {
  //         // console.log('comboDropDowns', data);
  //         this.comboBoxesDataGender = data.result.gender;
  //         console.log('gender',this.comboBoxesDataGender)
  //       }
  //     },
  //     error => {
  //       this.toastr.warning(error.error.message);
  //     }
  //   );
  // }

  comboGender($event, id): void {
    if ($event.source.selected) {
      this.addUser.genderId = id.gender_id;
    }
  }

}
