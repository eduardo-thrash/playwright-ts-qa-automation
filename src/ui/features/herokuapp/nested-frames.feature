@navigation
@herokuapp
Feature: Access Nested Frames

  Scenario: Open the Nested Frames option
    Given the user was on the the-internet homepage
    When the user opens the "Nested Frames" option
    Then the "Nested Frames" page is displayed
