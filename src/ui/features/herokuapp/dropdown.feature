@navigation @herokuapp
Feature: Access Dropdown

  Scenario: Open the Dropdown option
    Given the user has opened the the-internet homepage
    When the user enters the "Dropdown" option with path "/dropdown"
    Then the option page with path "/dropdown" is displayed

