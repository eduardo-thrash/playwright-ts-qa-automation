@navigation
@herokuapp
Feature: Access Challenging DOM

  Scenario: Open the Challenging DOM option
    Given the user was on the the-internet homepage
    When the user opens the "Challenging DOM" option
    Then the "Challenging DOM" page is displayed
