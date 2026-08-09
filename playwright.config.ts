import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';
import { defineBddConfig } from 'playwright-bdd';

const baseURL = process.env.BASE_URL ?? 'https://the-internet.herokuapp.com';

const testDir = defineBddConfig({
  features: 'src/ui/features/**/*.feature',
  steps: ['src/ui/steps/**/*.ts', 'src/fixtures/**/*.ts'],
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  retries: 0,
  reporter: [['list'], ['allure-playwright', { resultsDir: 'allure-results' }]],
  use: {
    baseURL,
    httpCredentials: {
      username: process.env.HEROKUAPP_USERNAME ?? 'admin',
      password: process.env.HEROKUAPP_PASSWORD ?? 'admin',
      origin: baseURL,
    },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
