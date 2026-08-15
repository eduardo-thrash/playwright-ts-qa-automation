import { NotificationMessagesActions } from '@actions/herokuapp/notification-messages-actions';
import { test } from '@fixtures/test';
import { NotificationMessagesValidations } from '@validations/herokuapp/notification-messages-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the Notification Messages page was visible', async ({ page }) =>
  new NotificationMessagesActions(page).openPage(),
);
Given('a notification message was visible', async ({ page }) => new NotificationMessagesActions(page).openPage());
Given('a notification message was displayed', async ({ page }) => new NotificationMessagesActions(page).openPage());
When('the user requests notifications until a successful action is returned', async ({ page }) =>
  new NotificationMessagesActions(page).requestUntilSuccessful(),
);
When('the user requests a new notification', async ({ page }) =>
  new NotificationMessagesActions(page).requestNotification(),
);
When('the user closes the notification', async ({ page }) => new NotificationMessagesActions(page).closeNotification());
When('the message content is evaluated', async ({ page }) => new NotificationMessagesActions(page).viewMessage());
When('the user requests another notification', async ({ page }) =>
  new NotificationMessagesActions(page).requestNotification(),
);
When('the user requests notifications repeatedly', async ({ page }) =>
  new NotificationMessagesActions(page).requestRepeatedly(),
);
Then('the successful notification is visible', async ({ page }) =>
  new NotificationMessagesValidations(page).expectSuccessfulMessage(),
);
Then('only one notification is displayed', async ({ page }) =>
  new NotificationMessagesValidations(page).expectNotificationCountToBe(1),
);
Then('a supported notification message is visible', async ({ page }) =>
  new NotificationMessagesValidations(page).expectSupportedMessage(),
);
Then('the notification is hidden', async ({ page }) =>
  new NotificationMessagesValidations(page).expectNotificationToBeHidden(),
);
Then('the displayed notification is not empty', async ({ page }) =>
  new NotificationMessagesValidations(page).expectNotificationNotToBeEmpty(),
);
Then('the message belongs to the supported notification set', async ({ page }) =>
  new NotificationMessagesValidations(page).expectSupportedMessage(),
);
Then('no unknown notification text is accepted', async ({ page }) =>
  new NotificationMessagesValidations(page).expectSupportedMessage(),
);
Then('one current notification is visible', async ({ page }) =>
  new NotificationMessagesValidations(page).expectNotificationCountToBe(1),
);
Then('no duplicate notification container is displayed', async ({ page }) =>
  new NotificationMessagesValidations(page).expectNotificationCountToBe(1),
);
Then('every displayed message belongs to the supported set', async ({ page }) =>
  new NotificationMessagesValidations(page).expectEveryRecordedMessageToBeSupported(),
);
