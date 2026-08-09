@navigation
@herokuapp
Feature: Access Basic Auth

  Scenario: Open the Basic Auth option
    Given the user was on the the-internet homepage
    When the user opens the "Basic Auth" option
    Then the "Basic Auth" page is displayed
