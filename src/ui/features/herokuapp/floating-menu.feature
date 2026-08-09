@navigation @herokuapp
Feature: Access Floating Menu

  Scenario: Open the Floating Menu option
    Given the user has opened the the-internet homepage
    When the user enters the "Floating Menu" option with path "/floating_menu"
    Then the option page with path "/floating_menu" is displayed

