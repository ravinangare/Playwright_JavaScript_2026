export const siteData = {
  homeTitle: 'Playwright',
};

export const orangeHrmData = {
  loginUrl:
    process.env.ORANGEHRM_URL ||
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  validCredentials: {
    username: process.env.ORANGEHRM_USERNAME || 'Admin',
    password: process.env.ORANGEHRM_PASSWORD || 'admin123',
  },
  invalidCredentials: {
    username: 'invalid-user',
    password: 'invalid-password',
  },
};
