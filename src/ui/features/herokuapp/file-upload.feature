@navigation @herokuapp
Feature: Access File Upload

  Scenario: Open the File Upload option
    Given the user has opened the the-internet homepage
    When the user enters the "File Upload" option with path "/upload"
    Then the option page with path "/upload" is displayed

