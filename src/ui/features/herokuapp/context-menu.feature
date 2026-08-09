@navigation @herokuapp
Feature: Access Context Menu

  Scenario: Open the Context Menu option
    Given the user has opened the the-internet homepage
    When the user enters the "Context Menu" option with path "/context_menu"
    Then the option page with path "/context_menu" is displayed

