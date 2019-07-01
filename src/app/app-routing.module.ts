
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { SigninService } from './services/authGuard.service';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CheckOutBooksComponent } from './check-out-books/check-out-books.component';
import { HomeComponent } from './home/home.component';

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
        path: 'checkout-books', component: CheckOutBooksComponent
      },
      {
        path: 'add-book', loadChildren: './books/books.module#BooksModule'
      },
      {
        path: 'book_list', component: BookListComponent
      },
      {
        path: 'app-add-user', component: AddUserComponent
      },
     

    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
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
