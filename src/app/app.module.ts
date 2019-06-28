import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatSidenavModule, MatNativeDateModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatSortModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatButtonModule, MatPaginatorModule, MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListComponent } from './book-list/book-list.component';
import { CheckoutBooksComponent } from './checkout-books/checkout-books.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthorizationInterceptor } from './auth/authorization.interceptors';
import { UsersListComponent } from './users-list/users-list.component';
import { CheckOutBooksComponent } from './check-out-books/check-out-books.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    BookListComponent,
    CheckoutBooksComponent,
    AddUserComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    UsersListComponent,
    CheckOutBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        timeOut: 1500,
      }),
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatExpansionModule,
  ],
  providers: [
    MatDatepickerModule,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthorizationInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
