@navigation @herokuapp
Feature: Access Hovers

  Scenario: Open the Hovers option
    Given the user has opened the the-internet homepage
    When the user enters the "Hovers" option with path "/hovers"
    Then the option page with path "/hovers" is displayed

