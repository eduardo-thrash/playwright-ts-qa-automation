@navigation
@herokuapp
Feature: Access Dynamic Content

  Scenario: Open the Dynamic Content option
    Given the user was on the the-internet homepage
    When the user opens the "Dynamic Content" option
    Then the "Dynamic Content" page is displayed
