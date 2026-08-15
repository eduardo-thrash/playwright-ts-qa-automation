import { GeolocationActions } from '@actions/herokuapp/geolocation-actions';
import { test } from '@fixtures/test';
import { GeolocationValidations } from '@validations/herokuapp/geolocation-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('a known geolocation was configured and permitted', async ({ page }) =>
  new GeolocationActions(page).configure(4.711, -74.0721),
);
Given('a different known geolocation was configured and permitted', async ({ page }) =>
  new GeolocationActions(page).configure(40.7128, -74.006),
);
Given('the current coordinates were displayed', async ({ page }) => {
  const actions = new GeolocationActions(page);
  await actions.configure(4.711, -74.0721);
  await actions.requestLocation();
});
Given('geolocation permission was denied', async ({ page }) => new GeolocationActions(page).denyPermission());
Given('no geolocation was available to the browser', async ({ page }) => new GeolocationActions(page).denyPermission());
Given('latitude 0 and longitude 0 were configured and permitted', async ({ page }) =>
  new GeolocationActions(page).configure(0, 0),
);
Given('latitude 90 and longitude 180 were configured and permitted', async ({ page }) =>
  new GeolocationActions(page).configure(90, 180),
);
When('the user requests the current location', async ({ page }) => new GeolocationActions(page).requestLocation());
When('the user inspects the location map link', async ({ page }) => new GeolocationActions(page).inspectMapLink());
Then('the configured latitude is displayed', async ({ page }) => new GeolocationValidations(page).expectLatitude());
Then('the configured longitude is displayed', async ({ page }) => new GeolocationValidations(page).expectLongitude());
Then('the second configured latitude is displayed', async ({ page }) =>
  new GeolocationValidations(page).expectLatitude(),
);
Then('the second configured longitude is displayed', async ({ page }) =>
  new GeolocationValidations(page).expectLongitude(),
);
Then('the map destination contains the displayed coordinates', async ({ page }) =>
  new GeolocationValidations(page).expectMapHrefCoordinates(),
);
Then('no coordinates are displayed', async ({ page }) => new GeolocationValidations(page).expectNoCoordinates());
Then('the page reports that location is unavailable', async ({ page }) =>
  new GeolocationValidations(page).expectUnavailableMessage(),
);
Then('the Geolocation page remains usable', async ({ page }) => new GeolocationValidations(page).expectPageUsable());
Then('latitude 0 is displayed', async ({ page }) => new GeolocationValidations(page).expectLatitude());
Then('longitude 0 is displayed', async ({ page }) => new GeolocationValidations(page).expectLongitude());
Then('latitude 90 is displayed', async ({ page }) => new GeolocationValidations(page).expectLatitude());
Then('longitude 180 is displayed', async ({ page }) => new GeolocationValidations(page).expectLongitude());
