import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/model/book';
import { BookService } from 'src/service/bookService/book.service';
import { SharingDataService } from 'src/service/dataSharing/sharing-data.service';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  title = "Member Login Successfull";
  books: Book[] = [];
  borrowedBook: Book[] = [];
  bookName = "";
  id: number = 0;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router,
    private sharingDataService: SharingDataService ) { }
  
  setUserId(){
    this.sharingDataService.userId = this.id;
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data;
    })
  }

  borrowBook(bookId: number){
    console.log("member call")
    this.bookService.addBorrowedBook(this.sharingDataService.userId, bookId);
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("id "+this.id)
    this.getBooks();
    this.setUserId();
    this.borrowedBook  = this.bookService.getBookArray(this.id);
  }
}