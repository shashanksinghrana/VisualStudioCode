import { ShoppingKartPage } from './app.po';

describe('shopping-kart App', function() {
  let page: ShoppingKartPage;

  beforeEach(() => {
    page = new ShoppingKartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
