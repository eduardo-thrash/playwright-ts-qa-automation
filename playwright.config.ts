import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "src/ui/features/**/*.feature",
  steps: ["src/ui/steps/**/*.ts", "src/fixtures/**/*.ts"],
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  retries: 0,
  reporter: [["list"], ["allure-playwright", { resultsDir: "allure-results" }]],
  use: {
    baseURL: "https://the-internet.herokuapp.com",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: false,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
