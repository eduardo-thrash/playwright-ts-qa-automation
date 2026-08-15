@herokuapp
Feature: Add/Remove Elements

  @happy-path
  Scenario: Add and remove one element
    Given the user was on the "Add/Remove Elements" page
    When the user adds one element
    And removes the added element
    Then no Delete button is visible

  @alternate-success
  Scenario: Add multiple elements
    Given the user was on the "Add/Remove Elements" page
    When the user adds three elements
    Then three Delete buttons are visible

  @alternate-success
  Scenario: Remove one element from a group
    Given three elements were added
    When the user removes one element
    Then two Delete buttons remain visible

  @negative
  Scenario: Prevent deletion when no element exists
    Given no removable element was available
    When the user views the removal area
    Then no Delete button is visible
    And the page remains usable

  @negative
  Scenario: Prevent a removed element from being removed again
    Given one added element was removed
    When the user views the removal area again
    Then the removed element is no longer actionable
    And no Delete button remains visible

  @edge
  Scenario: Add a large group of elements
    Given the user was on the "Add/Remove Elements" page
    When the user adds fifty elements
    Then fifty Delete buttons are visible

  @edge
  Scenario: Add and remove elements repeatedly
    Given the user was on the "Add/Remove Elements" page
    When the user repeatedly adds and removes an element
    Then the number of Delete buttons matches the remaining elements
    And the page remains responsive

  @navigation
  Scenario: Open the Add/Remove Elements option
    Given the user was on the the-internet homepage
    When the user opens the "Add/Remove Elements" option
    Then the "Add/Remove Elements" page is displayed
