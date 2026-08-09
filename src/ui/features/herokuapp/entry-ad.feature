@navigation @herokuapp
Feature: Access Entry Ad

  Scenario: Open the Entry Ad option
    Given the user has opened the the-internet homepage
    When the user enters the "Entry Ad" option with path "/entry_ad"
    Then the option page with path "/entry_ad" is displayed

