@navigation
@herokuapp
Feature: Access Large & Deep DOM

  Scenario: Open the Large & Deep DOM option
    Given the user was on the the-internet homepage
    When the user opens the "Large & Deep DOM" option
    Then the "Large & Deep DOM" page is displayed
