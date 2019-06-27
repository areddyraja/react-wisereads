
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { BookListComponent } from './book-list/book-list.component';
import { CheckoutBooksComponent } from './checkout-books/checkout-books.component';
import { LoginComponent } from './login/login.component';
import { SigninService } from './services/authGuard.service';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [SigninService],
    children: [
      {
        path: '', component: CardsComponent
      },
      {
        path: 'checkout-books', component: CheckoutBooksComponent
      },
      {
        path: 'add-book', loadChildren: './books/books.module#BooksModule'
      },
      {
        path: 'book_list', component: BookListComponent
      },
      {
        path: 'checkout-books', component: CheckoutBooksComponent
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
