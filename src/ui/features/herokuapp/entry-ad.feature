@navigation
@herokuapp
Feature: Access Entry Ad

  Scenario: Open the Entry Ad option
    Given the user was on the the-internet homepage
    When the user opens the "Entry Ad" option
    Then the "Entry Ad" page is displayed
