import { Ang2SergeblogPage } from './app.po';

describe('ang2-sergeblog App', function() {
  let page: Ang2SergeblogPage;

  beforeEach(() => {
    page = new Ang2SergeblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
