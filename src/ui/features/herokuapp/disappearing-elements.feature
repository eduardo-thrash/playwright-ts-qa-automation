@herokuapp
Feature: Disappearing Elements

  @happy-path
  Scenario: Display the required navigation elements
    Given the user was on the "Disappearing Elements" page
    When the navigation menu loads
    Then Home, About, Contact Us, and Portfolio are visible
    And the menu remains usable

  @alternate-success
  Scenario: Return home from the navigation menu
    Given the Disappearing Elements menu was visible
    When the user opens Home
    Then the the-internet homepage is displayed

  @alternate-success
  Scenario: Reload the dynamic navigation menu
    Given the Disappearing Elements menu was visible
    When the user reloads the page
    Then every required navigation element is visible
    And Gallery may be visible or absent

  @negative
  Scenario: Handle the optional Gallery element being absent
    Given Gallery was absent from the navigation menu
    When the user views the available menu items
    Then the four required navigation elements remain visible
    And no empty menu item is displayed

  @negative
  Scenario: Prevent interaction with an absent Gallery element
    Given Gallery was absent from the navigation menu
    When the user attempts to locate Gallery
    Then no Gallery navigation action is available
    And the page remains usable

  @edge
  Scenario: Support the optional Gallery element being present
    Given Gallery was present in the navigation menu
    When the user views the available menu items
    Then five navigation elements are visible
    And Gallery is actionable

  @edge
  Scenario: Keep the menu within its documented size across reloads
    Given the user was on the "Disappearing Elements" page
    When the user reloads the page repeatedly
    Then each menu contains four or five navigation elements
    And every menu contains the required navigation elements

  @navigation
  Scenario: Open the Disappearing Elements option
    Given the user was on the the-internet homepage
    When the user opens the "Disappearing Elements" option
    Then the "Disappearing Elements" page is displayed
