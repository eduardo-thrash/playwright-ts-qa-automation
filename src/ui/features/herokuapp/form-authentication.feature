@navigation
@herokuapp
Feature: Access Form Authentication

  Scenario: Open the Form Authentication option
    Given the user was on the the-internet homepage
    When the user opens the "Form Authentication" option
    Then the "Form Authentication" page is displayed
