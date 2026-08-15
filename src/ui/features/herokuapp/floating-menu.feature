@herokuapp
Feature: Floating Menu

  @happy-path
  Scenario: Keep the menu visible at the bottom of the page
    Given the floating menu was visible at the top of the page
    When the user scrolls to the bottom
    Then the floating menu remains visible
    And all menu options remain actionable

  @alternate-success
  Scenario: Navigate to the Home anchor
    Given the floating menu was visible
    When the user selects Home
    Then the Home anchor is present in the URL
    And the floating menu remains visible

  @alternate-success
  Scenario: Navigate to the About anchor
    Given the floating menu was visible
    When the user selects About
    Then the About anchor is present in the URL
    And the floating menu remains visible

  @negative
  Scenario: Prevent the menu from scrolling out of view
    Given the floating menu was visible
    When the user scrolls through the page content
    Then the floating menu does not leave the viewport

  @negative
  Scenario: Keep unknown menu options unavailable
    Given the floating menu was visible
    When the user looks for an unsupported menu option
    Then no unsupported menu option is actionable
    And the documented menu remains unchanged

  @edge
  Scenario: Keep the menu visible at the middle of the page
    Given the floating menu was visible at the top of the page
    When the user scrolls to the middle
    Then the floating menu remains visible

  @edge
  Scenario: Keep the menu stable during rapid scrolling
    Given the floating menu was visible
    When the user rapidly scrolls between the top and bottom
    Then the floating menu remains visible
    And only one floating menu is rendered

  @navigation
  Scenario: Open the Floating Menu option
    Given the user was on the the-internet homepage
    When the user opens the "Floating Menu" option
    Then the "Floating Menu" page is displayed
