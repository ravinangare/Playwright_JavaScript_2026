# Playwright JavaScript POM Framework

## Setup

Install dependencies and the browser binaries required by the configured Playwright projects:

```powershell
npm install
npx playwright install
```

## Run tests

```powershell
npm test
npm run test:headed
npm run test:chromium
npx playwright test tests/example.spec.js
```

The sample tests target `https://playwright.dev` by default. Set `BASE_URL` to run them against another compatible site:

```powershell
$env:BASE_URL = "https://your-site.example"
npm run test:chromium
```

The OrangeHRM login tests target the public demo by default. The demo credentials shown on its login page are used unless overridden:

```powershell
$env:ORANGEHRM_USERNAME = "Admin"
$env:ORANGEHRM_PASSWORD = "admin123"
npx playwright test tests/orangehrm-login.spec.js --project=chromium
```

Set `ORANGEHRM_URL` to use a different OrangeHRM login URL.

## Reports

- Playwright HTML report: `npm run report:html`
- Allure result files: generated in `allure-results/`
- Failure screenshots: attached to Playwright test results

## Framework structure

- `tests/`: test specifications
- `pages/`: page object classes and locators, including OrangeHRM login and dashboard
- `fixtures/`: custom Playwright fixtures for page objects
- `testdata/`: reusable test data
- `utils/`: shared framework utilities
