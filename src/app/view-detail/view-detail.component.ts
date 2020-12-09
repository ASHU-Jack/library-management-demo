import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Book } from '../../model/book';
import { BookService } from '../../service/bookService/book.service';
import { SharingDataService } from 'src/service/dataSharing/sharing-data.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  book: Book = new Book();
  id: number = 0;
  setVisible: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookService: BookService, private location: Location,
    private sharingDataService: SharingDataService) {
  }

  notEmpty<Book>(value: Book | null | undefined): value is Book {
    return value !== null && value !== undefined;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(book => this.book = book as Book);
    console.log(" in const "+this.sharingDataService.userId)  
    if (this.sharingDataService.userId === 0) {
      this.setVisible = false;
    } else {
      this.setVisible = true;
    }
    // this.route.params.pipe(
    //   switchMap((params: Params) => this.bookService.getBook(+params['id'])))
    //   .subscribe(book => this.book = book as Book);
  }
  goBack(): void {
    this.location.back();
  }

  borrowBook(){
    console.log("called")
    this.bookService.addBorrowedBook(this.sharingDataService.userId, this.id);
  }
} 
