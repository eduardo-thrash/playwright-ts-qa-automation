@navigation @herokuapp
Feature: Access Forgot Password

  Scenario: Open the Forgot Password option
    Given the user has opened the the-internet homepage
    When the user enters the "Forgot Password" option with path "/forgot_password"
    Then the option page with path "/forgot_password" is displayed

