import { AngularProjectManagerPage } from './app.po';

describe('angular-project-manager App', () => {
  let page: AngularProjectManagerPage;

  beforeEach(() => {
    page = new AngularProjectManagerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
