@navigation
@herokuapp
Feature: Access Infinite Scroll

  Scenario: Open the Infinite Scroll option
    Given the user was on the the-internet homepage
    When the user opens the "Infinite Scroll" option
    Then the "Infinite Scroll" page is displayed
