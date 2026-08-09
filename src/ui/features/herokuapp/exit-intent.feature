@navigation @herokuapp
Feature: Access Exit Intent

  Scenario: Open the Exit Intent option
    Given the user has opened the the-internet homepage
    When the user enters the "Exit Intent" option with path "/exit_intent"
    Then the option page with path "/exit_intent" is displayed

