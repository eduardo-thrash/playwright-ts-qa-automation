import { HoversActions } from '@actions/herokuapp/hovers-actions';
import { test } from '@fixtures/test';
import { HoversValidations } from '@validations/herokuapp/hovers-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the first user details were visible', async ({ page }) => {
  const actions = new HoversActions(page);
  await actions.openPage();
  await actions.hoverAvatar(1);
});
When(/^the user hovers over the (first|second|third) avatar$/, async ({ page }, ordinal: string) =>
  new HoversActions(page).hoverAvatar({ first: 1, second: 2, third: 3 }[ordinal] ?? 1),
);
When('no avatar is hovered', async ({ page }) => new HoversActions(page).moveOutsideAvatars());
When('the pointer leaves the first avatar', async ({ page }) => new HoversActions(page).moveOutsideAvatars());
When('the user moves the pointer to the third avatar', async ({ page }) => new HoversActions(page).hoverAvatar(3));
When('the user repeatedly hovers over the same avatar', async ({ page }) => new HoversActions(page).hoverRepeatedly(1));
Then(/^the (first|second|third) profile link is visible$/, async ({ page }, ordinal: string) =>
  new HoversValidations(page).expectProfileLinkToBeVisible({ first: 1, second: 2, third: 3 }[ordinal] ?? 1),
);
Then('every user caption is hidden', async ({ page }) => new HoversValidations(page).expectEveryCaptionToBeHidden());
Then('the first user details are hidden', async ({ page }) => new HoversValidations(page).expectCaptionToBeHidden(1));
Then('the third user details are visible', async ({ page }) => new HoversValidations(page).expectCaptionToBeVisible(3));
Then('one caption for that user is visible', async ({ page }) =>
  new HoversValidations(page).expectCaptionToBeVisible(1),
);
Then('no duplicate caption is created', async ({ page }) => new HoversValidations(page).expectCaptionCountToBe(3));
