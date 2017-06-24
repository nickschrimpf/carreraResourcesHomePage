import { CarreraResourcesHomePagePage } from './app.po';

describe('carrera-resources-home-page App', () => {
  let page: CarreraResourcesHomePagePage;

  beforeEach(() => {
    page = new CarreraResourcesHomePagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
