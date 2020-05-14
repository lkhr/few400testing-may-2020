import { Component, OnInit } from '@angular/core';
import { BooksDataService, BookEntity } from 'src/app/services/books.data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booklist',
  // template: '<html>stuff here</html>',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  message = '';
  books$: Observable<BookEntity[]>;
  constructor(private service: BooksDataService) { }

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }

  clickMe() {
    this.message = 'Hello, World!';
  }

}
