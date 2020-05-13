import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistComponent } from './booklist.component';
import { BooksDataService, BookEntity } from 'src/app/services/books.data.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BooklistComponent', () => {
  let component: BooklistComponent;
  let fixture: ComponentFixture<BooklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: BooksDataService, useClass: FakeBookDataService }],
      declarations: [BooklistComponent]
    });

    fixture = TestBed.createComponent(BooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('assigns the books', () => {
    expect(component.books$).toBeDefined();
  });

  it('formats the row of data properly', () => {
    const elTitle = fixture.debugElement.query(
      By.css('[data-booklist-title="0"]')).nativeElement as HTMLSpanElement;
    const elAuthor = fixture.debugElement.query(
      By.css('[data-booklist-author="0"]')).nativeElement as HTMLSpanElement;

    expect(elAuthor.innerText).toBe('Wells, HG');
    expect(elTitle.innerText).toBe('War of the Worlds');
  });

  it('duplicates the LI for each book', () => {
    const elBookList = fixture.debugElement.query(
      By.css('[data-booklist-list]')).nativeElement as HTMLUListElement;

    expect(elBookList.childElementCount).toBe(2);

  });
});

@Injectable() // TODO: WTH IS GOING ON HERE? IS THIS FOR REAL? WHO ARE YOU PEOPLE? THIS IS NOT MY BEAUTIFUL HOUSE!
class FakeBookDataService extends BooksDataService {
  constructor() {
    super(null);
  }
  getBooks() {
    return of([
      { id: '1', title: 'War of the Worlds', author: 'Wells, HG', yearPublished: 1898 },
      { id: '2', title: 'Jaws', author: 'Benchley, Peter', yearPublished: 1975 }
    ] as BookEntity[]);
  }
}
