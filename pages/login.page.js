export class LoginPage {
  constructor(page, loginUrl) {
    this.page = page;
    this.loginUrl = loginUrl;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.invalidCredentialsMessage = page.getByText('Invalid credentials', {
      exact: true,
    });
    this.requiredMessages = page.getByText('Required', { exact: true });
  }

  async open() {
    await this.page.goto(this.loginUrl);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
