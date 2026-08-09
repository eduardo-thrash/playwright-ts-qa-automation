@navigation @herokuapp
Feature: Access Form Authentication

  Scenario: Open the Form Authentication option
    Given the user has opened the the-internet homepage
    When the user enters the "Form Authentication" option with path "/login"
    Then the option page with path "/login" is displayed

