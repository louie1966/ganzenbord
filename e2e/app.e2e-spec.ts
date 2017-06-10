import { GanzenBordPage } from './app.po';

describe('ganzen-bord App', () => {
  let page: GanzenBordPage;

  beforeEach(() => {
    page = new GanzenBordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
