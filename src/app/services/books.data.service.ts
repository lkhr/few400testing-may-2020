import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class BooksDataService {

  constructor(private client: HttpClient) { }

  getBooks(): Observable<BookEntity[]> {
    return this.client.get<GetBooksResponse>('http://localhost:3000/books')
      .pipe(
        map(response => response.data), // GetBooksResponse -> BookServerItemResponse[]
        map(books => books.map(book => {
          return {
            id: book.id,
            title: book.title || 'No Title Provided',
            author: book.author.lastName + ', ' + book.author.firstName,
            yearPublished: book.yearPublished
          } as BookEntity;
        })),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            throw new Error('You have not paid.');
            // do another call to a logging service.
          } else {
            throw err;
          }
        })

      );
  }
}

export interface GetBooksResponse {
  data: BookServerItemResponse[];
}

interface BookServerItemResponse {
  id: string;
  title: string;
  author: {
    firstName: string;
    lastName: string;
  };
  yearPublished: number;
}

export interface BookEntity {
  id: string;
  title: string;
  author: string; // first, last
  yearPublished: number;
}
