# Agent.md
# Project Overview
This is a playwright Automation Framework developed using javascript and Node.js

# Technology Stack
- Java Script
- Playwright
- Node.js
- Page Object Model (POM)
- Allure Reporting

# Framework Architecture
- stote test scripts inside the tests folder.
- store page classes inside the pages folder.
- store test data inside the testdata folder.
- store reusable methods inside the utils folder.
- Store custom fixture for new developed page classes.

# coding guidelines
- use javascript ES6 synatx.
- use async await for asynchrinous operations.
- use page object model for automation script.
- avoid hard coded test data.
- use meaningful variable and function names.
- do not use unnecessary page.waitForTimeout().
- prefer playwright recommnended locators.
- add proper assertions using expect().

# Locator Guidelines
use the following priority 
- getByRole()
- getByLabel()
- getByPlaceholder()
- getByText()
- getByTestId()
- getByALtText()
- getByTitle()
- css Selector
- Xpath only when necessary.

# Test Execution Guidelines
- run all test using npx playwright test.
- run all in headed mode using npx playwright test --headed
- run a aspecific test using npx playwright test tests/example.spec.js

# Reporting Guidelines
- use playwright html reporting
- use Allure reporting.
- capture screenshots when test fails.

# Test Script Guidelines
- Each test should have a meaningful test title.
- use test.beforeEach() for common setup
- use test.afterEach() for common cleanup
- use expect() to validate actual and expected results.
- Avoid duplicate automation code.

# important instructions for AI Agents.
- Before creating a new test, understand the existing framework structure.
- Reuse existing page classes and and utility methods.
- do not change playwright.config.js unless required.
- Follow the existing coding standards.
- Do not introduce unnecessary dependencies.
- Explain important code changes before suggesting them.
- Run relevant tests after modifying automation scripts.
