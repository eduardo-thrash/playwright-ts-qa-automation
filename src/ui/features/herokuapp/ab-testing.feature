@navigation @herokuapp
Feature: Access A/B Testing

  Scenario: Open the A/B Testing option
    Given the user has opened the the-internet homepage
    When the user enters the "A/B Testing" option with path "/abtest"
    Then the option page with path "/abtest" is displayed

