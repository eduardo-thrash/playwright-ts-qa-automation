@navigation @herokuapp
Feature: Access Dynamic Loading

  Scenario: Open the Dynamic Loading option
    Given the user has opened the the-internet homepage
    When the user enters the "Dynamic Loading" option with path "/dynamic_loading"
    Then the option page with path "/dynamic_loading" is displayed

