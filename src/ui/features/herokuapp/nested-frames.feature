@navigation @herokuapp
Feature: Access Nested Frames

  Scenario: Open the Nested Frames option
    Given the user has opened the the-internet homepage
    When the user enters the "Nested Frames" option with path "/nested_frames"
    Then the option page with path "/nested_frames" is displayed

