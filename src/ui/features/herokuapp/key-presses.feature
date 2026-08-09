@navigation @herokuapp
Feature: Access Key Presses

  Scenario: Open the Key Presses option
    Given the user has opened the the-internet homepage
    When the user enters the "Key Presses" option with path "/key_presses"
    Then the option page with path "/key_presses" is displayed

