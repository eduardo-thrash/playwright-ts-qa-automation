import { HomeActions } from "@actions/herokuapp/home-actions";
import { test } from "@fixtures/test";
import { CommonValidations } from "@validations/common/common-validations";
import { HomeValidations } from "@validations/herokuapp/home-validations";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);

Given("the user has opened the the-internet homepage", async ({ page }) => {
  await new HomeActions(page).openHomePage();
});

Then("the homepage is displayed", async ({ page }) => {
  await new HomeValidations(page).pageIsDisplayed();
});

When(
  "the user enters the {string} option with path {string}",
  async ({ page }, option: string, expectedPath: string) => {
    await new HomeActions(page).openOption(option, expectedPath);
  },
);

Then(
  "the option page with path {string} is displayed",
  async ({ page }, expectedPath: string) => {
    await new CommonValidations(page).pathIsDisplayed(expectedPath);
  },
);
