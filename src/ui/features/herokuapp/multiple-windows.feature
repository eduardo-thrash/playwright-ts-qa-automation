@navigation
@herokuapp
Feature: Access Multiple Windows

  Scenario: Open the Multiple Windows option
    Given the user was on the the-internet homepage
    When the user opens the "Multiple Windows" option
    Then the "Multiple Windows" page is displayed
