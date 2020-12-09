import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibrarianLoginComponent } from './librarian-login/librarian-login.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { FilterPipe } from './filter/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/service/loginService/login.service';
import { BookService } from 'src/service/bookService/book.service';
import { BorrowBooksComponent } from './borrow-books/borrow-books.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    LibrarianLoginComponent,
    MemberLoginComponent,
    ViewDetailComponent,
    FilterPipe,
    BorrowBooksComponent,
    ReturnBookComponent,
    AddBookComponent,
    ManageBooksComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
