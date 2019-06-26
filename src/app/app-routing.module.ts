import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { BookListComponent } from './book-list/book-list.component';
import { CheckoutBooksComponent } from './checkout-books/checkout-books.component';
import { LoginComponent } from './login/login.component';
import { SigninService } from './services/authGuard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'app-dashboard', component: DashboardComponent,canActivate: [SigninService]
  },
  
  {
    path: 'cards', component: CardsComponent,canActivate: [SigninService]
  },
  {
    path: 'book_list', component: BookListComponent,canActivate: [SigninService]
  },
  {
    path: 'checkout-books', component: CheckoutBooksComponent,canActivate: [SigninService]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
