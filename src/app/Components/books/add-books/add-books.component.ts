import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BooksService } from '../../../services/books.service';
import { Router } from '@angular/router';
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

  constructor(  private formBuilder: FormBuilder, 
                private books: BooksService, 
                private router: Router,
                private saveUserService: SaveUserService,
                private toastr: ToastrService) { }

  ngOnInit() {
  //   this.addBookForm = this.formBuilder.group({
  //     bookName: ['', Validators.required],
  //     publisher: ['', Validators.required],
  //     isbnCode: ['', [Validators.required]],
  //     publicationDate: ['', [Validators.required]],
  //     authorName: ['', Validators.required],
  //     coverPage: ['', Validators.required],
  //     description: ['', Validators.required],
  //     Pages: ['', Validators.required],
  //     samplePageUrl: ['', Validators.required],
  //     genreId: ['', Validators.required],
  //     imageUrl1: ['', Validators.required],
  //     edition: ['', Validators.required],
  //     imageUrl2: ['', Validators.required],
  //     bookOwner: ['', Validators.required],
  //     rentalValue: ['', Validators.required],
  //     price: ['', Validators.required],
  //     noofCopies: ['', Validators.required],
  // });

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


