@navigation @herokuapp
Feature: Access JavaScript onload event error

  Scenario: Open the JavaScript onload event error option
    Given the user has opened the the-internet homepage
    When the user enters the "JavaScript onload event error" option with path "/javascript_error"
    Then the option page with path "/javascript_error" is displayed

