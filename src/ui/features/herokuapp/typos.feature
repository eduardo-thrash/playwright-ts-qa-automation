@navigation
@herokuapp
Feature: Access Typos

  Scenario: Open the Typos option
    Given the user was on the the-internet homepage
    When the user opens the "Typos" option
    Then the "Typos" page is displayed
