@navigation
@herokuapp
Feature: Access Status Codes

  Scenario: Open the Status Codes option
    Given the user was on the the-internet homepage
    When the user opens the "Status Codes" option
    Then the "Status Codes" page is displayed
