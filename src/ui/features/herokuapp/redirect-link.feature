@navigation
@herokuapp
Feature: Access Redirect Link

  Scenario: Open the Redirect Link option
    Given the user was on the the-internet homepage
    When the user opens the "Redirect Link" option
    Then the "Redirect Link" page is displayed
