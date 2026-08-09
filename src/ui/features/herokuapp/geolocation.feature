@navigation
@herokuapp
Feature: Access Geolocation

  Scenario: Open the Geolocation option
    Given the user was on the the-internet homepage
    When the user opens the "Geolocation" option
    Then the "Geolocation" page is displayed
