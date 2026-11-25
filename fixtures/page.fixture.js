import { test as base, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page.js';
import { GettingStartedPage } from '../pages/getting-started.page.js';
import { HomePage } from '../pages/home.page.js';
import { LoginPage } from '../pages/login.page.js';
import { orangeHrmData } from '../testdata/site.data.js';

export const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  gettingStartedPage: async ({ page }, use) => {
    await use(new GettingStartedPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page, orangeHrmData.loginUrl));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

export { expect };
