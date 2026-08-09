@navigation
@herokuapp
Feature: Access File Download

  Scenario: Open the File Download option
    Given the user was on the the-internet homepage
    When the user opens the "File Download" option
    Then the "File Download" page is displayed
