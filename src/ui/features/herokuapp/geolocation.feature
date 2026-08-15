@herokuapp
Feature: Geolocation

  @happy-path
  Scenario: Display a configured location
    Given a known geolocation was configured and permitted
    When the user requests the current location
    Then the configured latitude is displayed
    And the configured longitude is displayed

  @alternate-success
  Scenario: Display a second configured location
    Given a different known geolocation was configured and permitted
    When the user requests the current location
    Then the second configured latitude is displayed
    And the second configured longitude is displayed

  @alternate-success
  Scenario: Open the displayed location in the map link
    Given the current coordinates were displayed
    When the user opens the location map link
    Then the map destination contains the displayed coordinates

  @negative
  Scenario: Handle denied geolocation permission
    Given geolocation permission was denied
    When the user requests the current location
    Then no coordinates are displayed
    And the page reports that location is unavailable

  @negative
  Scenario: Handle an unavailable geolocation
    Given no geolocation was available to the browser
    When the user requests the current location
    Then no coordinates are displayed
    And the Geolocation page remains usable

  @edge
  Scenario: Display zero coordinates
    Given latitude 0 and longitude 0 were configured and permitted
    When the user requests the current location
    Then latitude 0 is displayed
    And longitude 0 is displayed

  @edge
  Scenario: Display boundary coordinates
    Given latitude 90 and longitude 180 were configured and permitted
    When the user requests the current location
    Then latitude 90 is displayed
    And longitude 180 is displayed

  @navigation
  Scenario: Open the Geolocation option
    Given the user was on the the-internet homepage
    When the user opens the "Geolocation" option
    Then the "Geolocation" page is displayed
