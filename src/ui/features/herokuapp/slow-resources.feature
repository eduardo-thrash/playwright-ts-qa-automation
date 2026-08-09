@navigation @herokuapp
Feature: Access Slow Resources

  Scenario: Open the Slow Resources option
    Given the user has opened the the-internet homepage
    When the user enters the "Slow Resources" option with path "/slow"
    Then the option page with path "/slow" is displayed

