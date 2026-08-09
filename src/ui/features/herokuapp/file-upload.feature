@navigation
@herokuapp
Feature: Access File Upload

  Scenario: Open the File Upload option
    Given the user was on the the-internet homepage
    When the user opens the "File Upload" option
    Then the "File Upload" page is displayed
