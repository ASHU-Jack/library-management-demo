import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/model/book';
import { BookService } from 'src/service/bookService/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();
  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
    rackNumber: new FormControl('', Validators.required),
    numberOfCopy: new FormControl('', Validators.required)
  });
  constructor(private router: Router, private bookService: BookService,
    private location: Location) { }

  get title(): any {
    return this.bookForm ? this.bookForm.get('title') : null;
  }
  get author(): any {
    return this.bookForm ? this.bookForm.get('author') : null;
  }
  get description(): any {
    return this.bookForm ? this.bookForm.get('description') : null;
  }
  get rackNumber(): any {
    return this.bookForm ? this.bookForm.get('rackNumber') : null;
  }
  get numberOfCopy(): any {
    return this.bookForm ? this.bookForm.get('numberOfCopy') : null;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.bookForm.valid) {
      this.book = Object.assign(this.book, this.bookForm.value);
    this.bookService.addBook(this.book).subscribe(res => {
      console.log('Product created!');
      this.location.back();
    })
    }else{
      console.log("something is wrong");
    }
  }

  goBack(): void {
    this.location.back();
  }
}
