import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BooksService } from '../../../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SaveUserService } from 'src/app/services/save-user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  private selectUndefinedOptionValue:any;
  submitted = false;
  addbook:any
  addBookForm: FormGroup;
  comboBoxesbookGenre: any;
  model: any = {};
  regId: string;
  check = true;
  constructor(  private formBuilder: FormBuilder, 
                private books: BooksService, 
                private router: Router,
                private saveUserService: SaveUserService,
                private route: ActivatedRoute,
                private toastr: ToastrService) 
                { 
                  this.route.params.subscribe(params => {
                    if (params) {
                      this.regId = params.id;
                      // console.log(this.regId)
                    }
                  });
                }

  ngOnInit() {
  
    if (this.regId) {
      this.loadEditBook(this.regId);
    }

    this.loadComboBoxes();
  }

  // onSubmit() {
    
  //   this.submitted = true;

  //   this.model.createdBy = localStorage.getItem('username');
  //   console.log(this.model);
  //   this.books.AddBooks(this.model).subscribe(
  //     (data: any) => {
  //         // console.log(data);
  //     },
  //   );
  // }

  onSubmit() {
    this.model.createdBy = localStorage.getItem('username');
    this.books.AddBooks(this.model).subscribe(
      (data: any) => {
        console.log(data)
        if(data.resultsMap.book){
          this.toastr.success("Book Details added successfully");
          this.router.navigateByUrl('/book_list');
        }
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  loadEditBook(regId) {
    this.check = false
    this.books.loadbook(regId).subscribe(
      (data: any) => {
        console.log(data)
        this.model = data.resultsMap.book;
        console.log("loadEditUser",this.model)
        // if (data && data.resultsMap && data.resultsMap.user) {
        //   this.toastr.success('Updated User Successfully');
        //   this.router.navigateByUrl('/app-dashboard');
        // } else if (data.resultsMap.emailExistError) {
        //   this.toastr.warning(data.resultsMap.emailExistError);
        // }
      },
      error => {
        this.toastr.warning(error.error.message);
      }
    );
  }

  editBooks() {
    this.model.createdBy = localStorage.getItem('name');
    this.books.editbook(this.model).subscribe(
      (data: any) => {
        // console.log('addUser Object', this.addUser);
        console.log('edit books',data)
        // if (data && data.resultsMap && data.resultsMap.user) {
        //   this.toastr.success(data.message);
        //   this.router.navigateByUrl('/app-dashboard');
        // } else if (data.resultsMap.emailExistError) {
        //   this.toastr.warning(data.resultsMap.emailExistError);
        // }
      },
      error => {
        console.log(error);
        // this.toastr.warning(error.error.message);
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
          this.comboBoxesbookGenre = data.result.bookGenre;
          console.log('comboDropDowns', this.comboBoxesbookGenre);
        }
      },
    );
  }

  comboGenr($event, id): void {
    if ($event.source.selected) {
      this.addbook.genreId = id.genre_id;
    }
  }

  cancel() {
    this.router.navigateByUrl('/app-users-list');
  }


    // onSubmit() {
    //     this.submitted = true;

    //     // stop here if form is invalid
    //     if (this.registerForm.invalid) {
    //         return;
    //     }
    //     console.log(this.registerForm.value);
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    // }
}


