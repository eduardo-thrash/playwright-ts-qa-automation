@navigation
@herokuapp
Feature: Access JavaScript Alerts

  Scenario: Open the JavaScript Alerts option
    Given the user was on the the-internet homepage
    When the user opens the "JavaScript Alerts" option
    Then the "JavaScript Alerts" page is displayed
