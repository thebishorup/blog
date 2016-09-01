export class BloggerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blog-root h1')).getText();
  }
}
