@navigation
@herokuapp
Feature: Access Digest Authentication

  Scenario: Open the Digest Authentication option
    Given the user was on the the-internet homepage
    When the user opens the "Digest Authentication" option
    Then the "Digest Authentication" page is displayed
