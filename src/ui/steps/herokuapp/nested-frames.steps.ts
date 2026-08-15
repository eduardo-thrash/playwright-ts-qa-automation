import { NestedFramesActions } from '@actions/herokuapp/nested-frames-actions';
import { test } from '@fixtures/test';
import { NestedFramesValidations } from '@validations/herokuapp/nested-frames-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the top nested frame group was loaded', async ({ page }) => {
  const actions = new NestedFramesActions(page);
  await actions.openPage();
  await actions.waitForTopGroup();
});
Given('the bottom nested frame was loaded', async ({ page }) => {
  const actions = new NestedFramesActions(page);
  await actions.openPage();
  await actions.waitForBottomFrame();
});
Given('every nested frame was loaded', async ({ page }) => {
  const actions = new NestedFramesActions(page);
  await actions.openPage();
  await actions.waitForEveryFrame();
});
Given('the nested frame hierarchy was loaded', async ({ page }) => {
  const actions = new NestedFramesActions(page);
  await actions.openPage();
  await actions.waitForEveryFrame();
});
When('every nested frame finishes loading', async ({ page }) => new NestedFramesActions(page).waitForEveryFrame());
When('the user accesses its child frames', async ({ page }) => new NestedFramesActions(page).waitForTopGroup());
When('the user accesses its content', async ({ page }) => new NestedFramesActions(page).waitForBottomFrame());
When('the parent document body is inspected', async ({ page }) => new NestedFramesActions(page).waitForEveryFrame());
When('the frame hierarchy is inspected', async ({ page }) => new NestedFramesActions(page).waitForEveryFrame());
When('the user reloads the Nested Frames page', async ({ page }) => new NestedFramesActions(page).reloadPage());
When('the user accesses the middle child through the top frame', async ({ page }) =>
  new NestedFramesActions(page).waitForTopGroup(),
);
Then('LEFT, MIDDLE, RIGHT, and BOTTOM are visible', async ({ page }) =>
  new NestedFramesValidations(page).expectPageToBeDisplayed(),
);
Then('LEFT, MIDDLE, RIGHT, and BOTTOM are visible again', async ({ page }) =>
  new NestedFramesValidations(page).expectPageToBeDisplayed(),
);
Then('LEFT, MIDDLE, and RIGHT are visible', async ({ page }) =>
  new NestedFramesValidations(page).expectTopFrameContents(),
);
Then('BOTTOM is visible', async ({ page }) => new NestedFramesValidations(page).expectBottomFrameContent());
Then('MIDDLE is visible', async ({ page }) => new NestedFramesValidations(page).expectTopFrameContents());
Then('the top and bottom frame groups are attached', async ({ page }) =>
  new NestedFramesValidations(page).expectTopAndBottomGroupsToBeAttached(),
);
Then('each value belongs to a different child frame', async ({ page }) =>
  new NestedFramesValidations(page).expectValuesToBelongToDifferentFrames(),
);
Then('the bottom frame remains attached', async ({ page }) =>
  new NestedFramesValidations(page).expectTopAndBottomGroupsToBeAttached(),
);
Then('the frame values are not direct parent-body content', async ({ page }) =>
  new NestedFramesValidations(page).expectFrameValuesOutsideParentBody(),
);
Then('the nested frames remain attached', async ({ page }) =>
  new NestedFramesValidations(page).expectTopAndBottomGroupsToBeAttached(),
);
Then('only four content frames are available', async ({ page }) =>
  new NestedFramesValidations(page).expectFourContentFrames(),
);
Then('no fifth content frame is attached', async ({ page }) =>
  new NestedFramesValidations(page).expectFourContentFrames(),
);
Then('the sibling frames remain attached', async ({ page }) =>
  new NestedFramesValidations(page).expectSiblingFramesToRemainAttached(),
);
