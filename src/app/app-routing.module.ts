
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CardsComponent } from './Components/cards/cards.component';

import { LoginComponent } from './Components/login/login.component';
import { SigninService } from './_helpers/authGuard.service';
import { HomeLayoutComponent } from './Components/layout/home-layout.component';
import { LoginLayoutComponent } from './Components/layout/login-layout.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { SingleBookComponent } from './Components/single-book/single-book.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { CheckOutBooksComponent } from './Components/check-out-books/check-out-books.component';
import { HomeComponent } from './Components/home/home.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserBooksDetailsComponent } from './Components/user-books-details/user-books-details.component';

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
        path: 'add-book', loadChildren: './Components/books/books.module#BooksModule'
      },
      {
        path: 'book_list', component: BookListComponent
      },
      {
        path: 'app-add-user', component: AddUserComponent
      },
      {
        path: 'inventory', component: InventoryComponent
      },
      {
        path: 'book-detail/:id', component: SingleBookComponent
      },
      {
        path: 'app-users-list', component: UsersListComponent
      },
      {
        path: 'app-check-out-books', component: CheckOutBooksComponent
      },
      {
        path: 'user-book-details/:id', component: UserBooksDetailsComponent
      }
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
      },
      {
        path: 'register',
        component: RegisterComponent
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
