@navigation
@herokuapp
Feature: Access Key Presses

  Scenario: Open the Key Presses option
    Given the user was on the the-internet homepage
    When the user opens the "Key Presses" option
    Then the "Key Presses" page is displayed
