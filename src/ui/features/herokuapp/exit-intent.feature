@navigation
@herokuapp
Feature: Access Exit Intent

  Scenario: Open the Exit Intent option
    Given the user was on the the-internet homepage
    When the user opens the "Exit Intent" option
    Then the "Exit Intent" page is displayed
