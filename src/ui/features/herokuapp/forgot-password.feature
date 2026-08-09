@navigation
@herokuapp
Feature: Access Forgot Password

  Scenario: Open the Forgot Password option
    Given the user was on the the-internet homepage
    When the user opens the "Forgot Password" option
    Then the "Forgot Password" page is displayed
