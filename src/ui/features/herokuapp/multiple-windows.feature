@navigation @herokuapp
Feature: Access Multiple Windows

  Scenario: Open the Multiple Windows option
    Given the user has opened the the-internet homepage
    When the user enters the "Multiple Windows" option with path "/windows"
    Then the option page with path "/windows" is displayed

