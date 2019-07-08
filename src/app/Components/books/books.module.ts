import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatSelectModule, MatDatepickerModule} from '@angular/material';
import { BooksRoutingModule } from './books-routing.module';
import { AddBooksComponent } from './add-books/add-books.component';


@NgModule({
  declarations: [AddBooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule
  ]
})
export class BooksModule { }
