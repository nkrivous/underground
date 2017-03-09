import { UndergroundPage } from './app.po';

describe('underground App', function() {
  let page: UndergroundPage;

  beforeEach(() => {
    page = new UndergroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
