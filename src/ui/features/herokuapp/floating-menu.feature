@navigation
@herokuapp
Feature: Access Floating Menu

  Scenario: Open the Floating Menu option
    Given the user was on the the-internet homepage
    When the user opens the "Floating Menu" option
    Then the "Floating Menu" page is displayed
