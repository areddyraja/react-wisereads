import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPassword } from '../../helper/confirm-password.validator';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {

  submitted = false;

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private books: BooksService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      publisher: ['', Validators.required],
      isbnCode: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]],
      authorName: ['', Validators.required],
      coverPage: ['', Validators.required],
      description: ['', Validators.required],
      Pages: ['', Validators.required],
      samplePageUrl: ['', Validators.required],
      genre: ['', Validators.required],
      imageUrl1: ['', Validators.required],
      edition: ['', Validators.required],
      imageUrl2: ['', Validators.required],
      bookOwner: ['', Validators.required],
      rentalValue: ['', Validators.required],
      price: ['', Validators.required],
      noofCopies: ['', Validators.required],
  });

  }

  // AddBooks() {
  //   this.books.AddBooks(this.registerForm.value).subscribe(
  //     data => {
  //         console.log(data);
  //   },
  //   error => {
  //     console.log(error);
  //   });
  // }



  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    }
}


