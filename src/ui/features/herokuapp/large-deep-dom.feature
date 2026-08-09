@navigation @herokuapp
Feature: Access Large & Deep DOM

  Scenario: Open the Large & Deep DOM option
    Given the user has opened the the-internet homepage
    When the user enters the "Large & Deep DOM" option with path "/large"
    Then the option page with path "/large" is displayed

