@herokuapp
Feature: Shifting Content

  @happy-path
  Scenario: Keep the important list record through a reload
    Given the shifting list example was visible
    When the user reloads the list example
    Then "Important Information You're Looking For" remains visible
    And the list content remains usable

  @alternate-success
  Scenario: Open the shifting menu example
    Given the user was on the "Shifting Content" page
    When the user opens the Menu Element example
    Then the documented navigation menu is visible
    And every menu item remains actionable

  @alternate-success
  Scenario: Open the shifting image example
    Given the user was on the "Shifting Content" page
    When the user opens the Image example
    Then the shifting image is visible
    And the image has loaded successfully

  @negative
  Scenario: Expose no unsupported shifting example
    Given the user was on the "Shifting Content" page
    When the available examples are displayed
    Then only Menu Element, An image, and List are actionable

  @negative
  Scenario: Prevent the important record from disappearing
    Given the shifting list example was visible
    When the user reloads the list repeatedly
    Then the important information record is never absent

  @edge
  Scenario: Load the menu with random shifting enabled
    Given the shifting menu example was visible
    When the user enables random shifting
    Then the navigation menu remains visible
    And every menu item remains actionable

  @edge
  Scenario: Load the simple image variant with a pixel shift
    Given the shifting image example was visible
    When the user requests a simple image with a pixel shift
    Then the shifted image is visible
    And the image has loaded successfully

  @navigation
  Scenario: Open the Shifting Content option
    Given the user was on the the-internet homepage
    When the user opens the "Shifting Content" option
    Then the "Shifting Content" page is displayed
