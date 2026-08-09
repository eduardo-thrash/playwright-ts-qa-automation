@navigation
@herokuapp
Feature: Access Broken Images

  Scenario: Open the Broken Images option
    Given the user was on the the-internet homepage
    When the user opens the "Broken Images" option
    Then the "Broken Images" page is displayed
