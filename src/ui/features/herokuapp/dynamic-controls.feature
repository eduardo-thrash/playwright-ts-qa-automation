@navigation @herokuapp
Feature: Access Dynamic Controls

  Scenario: Open the Dynamic Controls option
    Given the user has opened the the-internet homepage
    When the user enters the "Dynamic Controls" option with path "/dynamic_controls"
    Then the option page with path "/dynamic_controls" is displayed

