@navigation
@herokuapp
Feature: Access Frames

  Scenario: Open the Frames option
    Given the user was on the the-internet homepage
    When the user opens the "Frames" option
    Then the "Frames" page is displayed
