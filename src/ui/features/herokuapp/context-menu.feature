@navigation
@herokuapp
Feature: Access Context Menu

  Scenario: Open the Context Menu option
    Given the user was on the the-internet homepage
    When the user opens the "Context Menu" option
    Then the "Context Menu" page is displayed
