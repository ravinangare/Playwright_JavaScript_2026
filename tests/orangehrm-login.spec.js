import { test, expect } from '../fixtures/page.fixture.js';
import { orangeHrmData } from '../testdata/site.data.js';

test.describe('OrangeHRM login', () => {
  test('valid credentials open the dashboard', async ({ loginPage, dashboardPage }) => {
    await loginPage.open();
    await loginPage.login(
      orangeHrmData.validCredentials.username,
      orangeHrmData.validCredentials.password,
    );

    await expect(dashboardPage.page).toHaveURL(/\/dashboard\/index/);
    await expect(dashboardPage.heading).toBeVisible();
  });

  test('invalid credentials are rejected', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(
      orangeHrmData.invalidCredentials.username,
      orangeHrmData.invalidCredentials.password,
    );

    await expect(loginPage.invalidCredentialsMessage).toBeVisible();
    await expect(loginPage.page).toHaveURL(/\/auth\/login/);
  });

  test('empty credentials show required field validation', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginButton.click();

    await expect(loginPage.requiredMessages).toHaveCount(2);
  });
});
