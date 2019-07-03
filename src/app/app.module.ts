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

import { CardsComponent } from './component/cards/cards.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { HomeLayoutComponent } from './component/layout/home-layout.component';
import { LoginLayoutComponent } from './component/layout/login-layout.component';
import { LoginComponent } from './component/login/login.component';
import { AuthorizationInterceptor } from './component/auth/authorization.interceptors';
import { InventoryComponent } from './component/inventory/inventory.component';
import { SearchComponent } from './component/search/search.component';
import { SingleBookComponent } from './component/single-book/single-book.component';
import { UsersListComponent } from './component/users-list/users-list.component';
import { CheckOutBooksComponent } from './component/check-out-books/check-out-books.component';
import { HomeComponent } from './component/home/home.component';
import { CarouselModule } from 'ngx-bootstrap';
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
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    AppRoutingModule,
    MatDialogModule,
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
    NgxMatSelectSearchModule,
    HttpModule,
    MatAutocompleteModule,
    NgxDatatableModule,
    NguCarouselModule,
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
      CarouselModule.forRoot(),
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
