@navigation
@herokuapp
Feature: Access A/B Testing

  Scenario: Open the A/B Testing option
    Given the user was on the the-internet homepage
    When the user opens the "A/B Testing" option
    Then the "A/B Testing" page is displayed
