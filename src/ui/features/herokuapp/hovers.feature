@navigation
@herokuapp
Feature: Access Hovers

  Scenario: Open the Hovers option
    Given the user was on the the-internet homepage
    When the user opens the "Hovers" option
    Then the "Hovers" page is displayed
