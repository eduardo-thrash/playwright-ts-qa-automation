@navigation @herokuapp
Feature: Access Inputs

  Scenario: Open the Inputs option
    Given the user has opened the the-internet homepage
    When the user enters the "Inputs" option with path "/inputs"
    Then the option page with path "/inputs" is displayed

