
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CardsComponent } from './component/cards/cards.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { LoginComponent } from './component/login/login.component';
import { SigninService } from './services/authGuard.service';
import { HomeLayoutComponent } from './component/layout/home-layout.component';
import { LoginLayoutComponent } from './component/layout/login-layout.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { SingleBookComponent } from './component/single-book/single-book.component';
import { UsersListComponent } from './component/users-list/users-list.component';
import { CheckOutBooksComponent } from './component/check-out-books/check-out-books.component';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';

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
        path: 'add-book', loadChildren: './component/books/books.module#BooksModule'
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
