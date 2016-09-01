import { BloggerPage } from './app.po';

describe('blogger App', function() {
  let page: BloggerPage;

  beforeEach(() => {
    page = new BloggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('blog works!');
  });
});
