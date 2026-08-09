@navigation @herokuapp
Feature: Access Shadow DOM

  Scenario: Open the Shadow DOM option
    Given the user has opened the the-internet homepage
    When the user enters the "Shadow DOM" option with path "/shadowdom"
    Then the option page with path "/shadowdom" is displayed

