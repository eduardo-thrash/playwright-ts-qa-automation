@navigation @herokuapp
Feature: Access JavaScript Alerts

  Scenario: Open the JavaScript Alerts option
    Given the user has opened the the-internet homepage
    When the user enters the "JavaScript Alerts" option with path "/javascript_alerts"
    Then the option page with path "/javascript_alerts" is displayed

