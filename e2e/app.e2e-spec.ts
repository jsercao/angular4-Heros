import { HahaPage } from './app.po';

describe('haha App', () => {
  let page: HahaPage;

  beforeEach(() => {
    page = new HahaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
