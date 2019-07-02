
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
import { InventoryComponent } from './inventory/inventory.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CheckOutBooksComponent } from './check-out-books/check-out-books.component';

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
        path: 'add-book', loadChildren: './books/books.module#BooksModule'
      },
      {
        path: 'book_list', component: BookListComponent
      },

      {
        path: 'app-add-user', component: AddUserComponent
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
