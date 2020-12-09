import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AppComponent } from './app.component';
import { BorrowBooksComponent } from './borrow-books/borrow-books.component';
import { HomeComponent } from './home/home.component';
import { LibrarianLoginComponent } from './librarian-login/librarian-login.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

const routes: Routes = [{
  path: '', redirectTo: '/home', pathMatch: 'full' 
}, {
 path:'home', component: HomeComponent
}, {
  path:'login', component: LoginAppComponent
 }, {
  path:'registration', component: RegistrationComponent
 }, {
 path: 'login/librarian', component: LibrarianLoginComponent
}, {
  path: 'login/member/:id', component: MemberLoginComponent
}, { 
  path: 'view-detail/:id', component: ViewDetailComponent
}, {
  path: 'borrow-book/:userId/:bookId', component: BorrowBooksComponent
}, {
  path: 'borrow-book', component: BorrowBooksComponent
}, {
  path: 'return-book', component: ReturnBookComponent
}, {
  path: 'add-book', component: AddBookComponent
}, {
  path: 'manage-book', component: ManageBooksComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
