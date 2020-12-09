import { Component, OnInit } from '@angular/core';
import { Book } from 'src/model/book';
import { User } from 'src/model/user';
import { UserBorrowed } from 'src/model/userBorrowed';
import { BookService } from 'src/service/bookService/book.service';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {

  userBorrowedMap = new Map();
  userArray: User[] = [];
  bookArray: Book[] = [];
  userBorrowed: UserBorrowed[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.userBorrowed = this.bookService.getAllMemberAddBorrowedBooks();
    // this.bookService.userBorrowedM();
  }

  onClick(){
    
    //console.log(this.userBorrowed)
  //   for (let [key, value] of this.userBorrowedMap) {
  //     console.log(key, value);
  // } 
  }

}
