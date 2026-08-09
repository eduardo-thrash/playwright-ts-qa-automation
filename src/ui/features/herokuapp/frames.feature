@navigation @herokuapp
Feature: Access Frames

  Scenario: Open the Frames option
    Given the user has opened the the-internet homepage
    When the user enters the "Frames" option with path "/frames"
    Then the option page with path "/frames" is displayed

