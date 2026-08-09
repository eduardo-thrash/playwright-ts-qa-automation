import { HomeActions } from "@actions/herokuapp/HomeActions";
import { test } from "@fixtures/test";
import { HomeValidations } from "@validations/herokuapp/HomeValidations";
import { createBdd } from "playwright-bdd";

const { Given, Then } = createBdd(test);

Given("the user has opened the the-internet homepage", async ({ page }) => {
  await new HomeActions(page).open();
});

Then("the homepage is displayed", async ({ page }) => {
  await new HomeValidations(page).pageIsDisplayed();
});
