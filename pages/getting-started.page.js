export class GettingStartedPage {
  constructor(page) {
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }
}
