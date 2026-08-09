@navigation @herokuapp
Feature: Access Dynamic Content

  Scenario: Open the Dynamic Content option
    Given the user has opened the the-internet homepage
    When the user enters the "Dynamic Content" option with path "/dynamic_content"
    Then the option page with path "/dynamic_content" is displayed

