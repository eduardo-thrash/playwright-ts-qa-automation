@herokuapp
Feature: Context Menu

  @happy-path
  Scenario: Open the custom context menu
    Given the user was on the "Context Menu" page
    When the user opens the context menu inside the target area
    Then the custom context alert is displayed
    And the alert text is "You selected a context menu"

  @alternate-success
  Scenario: Accept the context menu alert
    Given the custom context alert was displayed
    When the user accepts the alert
    Then the alert is closed
    And the Context Menu page remains visible

  @alternate-success
  Scenario: Open the context menu more than once
    Given the user accepted a previous context alert
    When the user opens the context menu inside the target area again
    Then the custom context alert is displayed again

  @negative
  Scenario: Ignore a primary click inside the target area
    Given the user was on the "Context Menu" page
    When the user left-clicks inside the target area
    Then no custom context alert is displayed

  @negative
  Scenario: Ignore a context click outside the target area
    Given the user was on the "Context Menu" page
    When the user opens the context menu outside the target area
    Then no custom context alert is displayed

  @edge
  Scenario: Open the context menu at the target boundary
    Given the user was on the "Context Menu" page
    When the user opens the context menu at the boundary of the target area
    Then the custom context alert is displayed

  @edge
  Scenario: Repeat the context interaction after dismissing the alert
    Given the custom context alert was dismissed
    When the user opens the context menu inside the target area
    Then a new custom context alert is displayed
    And the alert text is "You selected a context menu"

  @navigation
  Scenario: Open the Context Menu option
    Given the user was on the the-internet homepage
    When the user opens the "Context Menu" option
    Then the "Context Menu" page is displayed
