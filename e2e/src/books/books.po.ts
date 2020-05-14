import { browser, element, by } from 'protractor';

export class BooksComponentPage {
  getMessage(): any {
    return element(by.css('[data-message]')).getText();
  }
  clickTheButton() {
    const button = element(by.css('[data-clickme]'));
    button.click();
  }
  navigateTo() {
    return browser.get('/book-list');
  }

  getFirstRowOfList() {
    const elTitle = element(by.css('[data-booklist-title="0"]'));
    const elAuthor = element(by.css('[data-booklist-author="0"]'));
    return {
      title: elTitle.getText(),
      author: elAuthor.getText()
    };
  }
}
