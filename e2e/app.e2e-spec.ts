import { TestApplicationPage } from './app.po';

describe('test-application App', () => {
  let page: TestApplicationPage;

  beforeEach(() => {
    page = new TestApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
