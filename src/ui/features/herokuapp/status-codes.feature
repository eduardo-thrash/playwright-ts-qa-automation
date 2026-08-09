@navigation @herokuapp
Feature: Access Status Codes

  Scenario: Open the Status Codes option
    Given the user has opened the the-internet homepage
    When the user enters the "Status Codes" option with path "/status_codes"
    Then the option page with path "/status_codes" is displayed

