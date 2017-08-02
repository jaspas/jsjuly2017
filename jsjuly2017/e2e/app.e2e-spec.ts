import { Jsjuly2017Page } from './app.po';

describe('jsjuly2017 App', () => {
  let page: Jsjuly2017Page;

  beforeEach(() => {
    page = new Jsjuly2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
