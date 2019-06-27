import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { BookListComponent } from './book-list/book-list.component';
import { CheckoutBooksComponent } from './checkout-books/checkout-books.component';


const routes: Routes = [
  {
    path: '', component: CardsComponent
  },
  {
    path: 'cards', component: CardsComponent
  },
  {
    path: 'book_list', component: BookListComponent
  },
  {
    path: 'checkout-books', component: CheckoutBooksComponent
  },
  {
    path: 'add-book', loadChildren: './books/books.module#BooksModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
