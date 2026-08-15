@herokuapp
Feature: Dynamic Loading

  @happy-path
  Scenario: Render an element that was not initially present
    Given the user was on Dynamic Loading Example 2
    When the user starts the dynamic loading
    Then "Hello World!" is displayed
    And the loading indicator is hidden

  @alternate-success
  Scenario: Reveal an initially hidden element
    Given the user was on Dynamic Loading Example 1
    When the user starts the dynamic loading
    Then "Hello World!" is visible
    And the loading indicator is hidden

  @alternate-success
  Scenario: Open both dynamic loading examples
    Given the user was on the "Dynamic Loading" page
    When the user opens each documented example
    Then each example provides a Start action
    And each example identifies its loading strategy

  @negative
  Scenario: Keep the hidden element concealed before starting
    Given the user was on Dynamic Loading Example 1
    When the user has not started the dynamic loading
    Then "Hello World!" is not visible

  @negative
  Scenario: Keep the rendered element absent before starting
    Given the user was on Dynamic Loading Example 2
    When the user has not started the dynamic loading
    Then "Hello World!" is not present

  @edge
  Scenario: Prevent another start while loading is in progress
    Given dynamic loading was in progress
    When the user views the loading controls
    Then the Start action is not available
    And the loading indicator is visible

  @edge
  Scenario: Reset the dynamic example after reopening it
    Given "Hello World!" was displayed in a dynamic example
    When the user reopens the same example
    Then the Start action is available again
    And the final content is initially hidden or absent

  @navigation
  Scenario: Open the Dynamic Loading option
    Given the user was on the the-internet homepage
    When the user opens the "Dynamic Loading" option
    Then the "Dynamic Loading" page is displayed
