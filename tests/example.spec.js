import { test, expect } from '../fixtures/page.fixture.js';
import { siteData } from '../testdata/site.data.js';

test.describe('Playwright documentation', () => {
  test('home page displays the expected title', async ({ homePage }) => {
    await homePage.open();

    await expect(homePage.page).toHaveTitle(new RegExp(siteData.homeTitle));
  });

  test('Get started opens the installation guide', async ({ homePage, gettingStartedPage }) => {
    await homePage.open();
    await homePage.openGettingStarted();

    await expect(gettingStartedPage.installationHeading).toBeVisible();
  });
});
