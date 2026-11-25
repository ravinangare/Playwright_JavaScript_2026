export function getBaseURL() {
  const baseURL = process.env.BASE_URL || 'https://playwright.dev';

  try {
    return new URL(baseURL).toString().replace(/\/$/, '');
  } catch {
    throw new Error(`BASE_URL must be a valid absolute URL. Received: "${baseURL}"`);
  }
}
