@navigation
@herokuapp
Feature: Access Dynamic Controls

  Scenario: Open the Dynamic Controls option
    Given the user was on the the-internet homepage
    When the user opens the "Dynamic Controls" option
    Then the "Dynamic Controls" page is displayed
