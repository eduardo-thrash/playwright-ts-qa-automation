@navigation @herokuapp
Feature: Access Challenging DOM

  Scenario: Open the Challenging DOM option
    Given the user has opened the the-internet homepage
    When the user enters the "Challenging DOM" option with path "/challenging_dom"
    Then the option page with path "/challenging_dom" is displayed

