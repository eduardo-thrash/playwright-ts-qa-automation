@navigation @herokuapp
Feature: Access Shifting Content

  Scenario: Open the Shifting Content option
    Given the user has opened the the-internet homepage
    When the user enters the "Shifting Content" option with path "/shifting_content"
    Then the option page with path "/shifting_content" is displayed

