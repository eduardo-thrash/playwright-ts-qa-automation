@navigation @herokuapp
Feature: Access File Download

  Scenario: Open the File Download option
    Given the user has opened the the-internet homepage
    When the user enters the "File Download" option with path "/download"
    Then the option page with path "/download" is displayed

