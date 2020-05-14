import { BooksComponentPage } from './books.po';

describe('the books component', () => {
  let page: BooksComponentPage;

  beforeEach(() => {
    page = new BooksComponentPage();
  });

  it('Can show the list', () => {
    page.navigateTo();
    const firstRow = page.getFirstRowOfList();
    expect(firstRow.title).toBe('High Weirdness');
    expect(firstRow.author).toBe('Davis, Eric');
  });

  it('gives you the message', () => {
    page.navigateTo();
    expect(page.getMessage()).toBe('');
    page.clickTheButton();
    expect(page.getMessage()).toBe('Hello, World!');
  });

});
