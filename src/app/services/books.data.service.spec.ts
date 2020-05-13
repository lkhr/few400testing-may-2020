import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { BooksDataService, GetBooksResponse, BookEntity } from './books.data.service';
import { TestBed } from '@angular/core/testing';
describe('the books data service', () => {

  let client: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: BooksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksDataService]
    });

    client = TestBed.inject<HttpClient>(HttpClient);
    httpTestingController = TestBed.inject<HttpTestingController>(HttpTestingController);
    service = TestBed.inject<BooksDataService>(BooksDataService);
  });
  it('getBooks retrieves and transforms the data', (done) => {
    // What should the HttpBacked (fake) return when the get is called.
    const testData: any = {
      data: [
        { id: '1', title: 'Nature', author: { firstName: 'Ralph', lastName: 'Emerson' }, yearPublished: 1843 },
        { id: '2', author: { firstName: 'H.G.', lastName: 'Wells' }, yearPublished: 1893 }
      ]
    };

    const expectedResponse: BookEntity[] = [
      { id: '1', title: 'Nature', author: 'Emerson, Ralph', yearPublished: 1843 },
      { id: '2', title: 'No Title Provided', author: 'Wells, H.G.', yearPublished: 1893 }
    ];

    const request = service.getBooks();
    request.subscribe(books => {
      expect(books).toEqual(expectedResponse);
      done();
    });

    const req = httpTestingController.expectOne('http://localhost:3000/books'); // This is a MOCK. I'll talk about this.
    expect(req.request.method).toBe('GET');
    req.flush(testData); // causes the subscription to be fulfilled.

  });

  it('failure result', (done) => {

    service.getBooks().subscribe(
      () => {
        fail('There should have been an error (not data)');
        done();
      },
      (err: Error) => {
        console.log(err);
        expect(err.message).toBe('You have not paid.');
        done();
      });

    const req = httpTestingController.expectOne('http://localhost:3000/books');

    const fakeError = new ErrorEvent('Unauthorized. You have no paid your bill!');
    req.error(fakeError, { status: 401 });
    // req.flush({ data: [] });
  });

});
