@navigation
@herokuapp
Feature: Access JavaScript onload event error

  Scenario: Open the JavaScript onload event error option
    Given the user was on the the-internet homepage
    When the user opens the "JavaScript onload event error" option
    Then the "JavaScript onload event error" page is displayed
