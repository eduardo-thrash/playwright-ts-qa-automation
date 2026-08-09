@navigation @herokuapp
Feature: Access Basic Auth

  Scenario: Open the Basic Auth option
    Given the user has opened the the-internet homepage
    When the user enters the "Basic Auth" option with path "/basic_auth"
    Then the option page with path "/basic_auth" is displayed

