@navigation @herokuapp
Feature: Access Geolocation

  Scenario: Open the Geolocation option
    Given the user has opened the the-internet homepage
    When the user enters the "Geolocation" option with path "/geolocation"
    Then the option page with path "/geolocation" is displayed

