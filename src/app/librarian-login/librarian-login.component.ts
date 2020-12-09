import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from 'src/service/dataSharing/sharing-data.service';

import { Book } from '../../model/book';
import { BookService } from '../../service/bookService/book.service';

@Component({
  selector: 'app-librarian-login',
  templateUrl: './librarian-login.component.html',
  styleUrls: ['./librarian-login.component.css']
})
export class LibrarianLoginComponent implements OnInit {

  title = "Librarian Login Successfull";
  books: Book[] = [];
  bookName = "";

  constructor(private bookService: BookService, private router: Router,
    private sharingDataService: SharingDataService) { }
  getBooks(): void {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data;
    })
  }
  setUserId(){
    this.sharingDataService.userId = 0;
  }

  ngOnInit(): void {
    this.getBooks();
    this.setUserId();
  }

  viewDetails(bookId: number){
    this.router.navigate(['/view-detail', bookId]);
  }
}
