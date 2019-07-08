import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatAutocompleteModule, MatDialogModule, MatSidenavModule, MatNativeDateModule, MatSelectModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatSortModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatButtonModule, MatPaginatorModule, MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NguCarouselModule } from '@ngu/carousel';
import { NgxCarouselModule } from 'ngx-carousel';
import {NgPipesModule} from 'ngx-pipes';

import { CardsComponent } from './Components/cards/cards.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { HomeLayoutComponent } from './Components/layout/home-layout.component';
import { LoginLayoutComponent } from './Components/layout/login-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthorizationInterceptor } from './Components/auth/authorization.interceptors';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { SearchComponent } from './Components/search/search.component';
import { SingleBookComponent } from './Components/single-book/single-book.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { CheckOutBooksComponent } from './Components/check-out-books/check-out-books.component';
import { HomeComponent } from './Components/home/home.component';
import { CarouselModule } from 'ngx-bootstrap';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { RegisterComponent } from './Components/register/register.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserBooksDetailsComponent } from './Components/user-books-details/user-books-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    BookListComponent,
    AddUserComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    InventoryComponent,
    SearchComponent,
    SingleBookComponent,
    UsersListComponent,
    CheckOutBooksComponent,
    HomeComponent,
    RegisterComponent,
    UserBooksDetailsComponent,

  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgPipesModule,
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
    NgxMatSelectSearchModule,
    HttpModule,
    MatAutocompleteModule,
    NgxDatatableModule,
    NguCarouselModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        timeOut: 3000,
      }),
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatExpansionModule,
      CarouselModule.forRoot(),
      BsDatepickerModule.forRoot(),
  ],
  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
