@navigation
@herokuapp
Feature: Access Dynamic Loading

  Scenario: Open the Dynamic Loading option
    Given the user was on the the-internet homepage
    When the user opens the "Dynamic Loading" option
    Then the "Dynamic Loading" page is displayed
