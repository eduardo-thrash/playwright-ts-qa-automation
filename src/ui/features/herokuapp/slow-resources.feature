@navigation
@herokuapp
Feature: Access Slow Resources

  Scenario: Open the Slow Resources option
    Given the user was on the the-internet homepage
    When the user opens the "Slow Resources" option
    Then the "Slow Resources" page is displayed
