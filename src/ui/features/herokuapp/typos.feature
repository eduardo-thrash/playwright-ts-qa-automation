@navigation @herokuapp
Feature: Access Typos

  Scenario: Open the Typos option
    Given the user has opened the the-internet homepage
    When the user enters the "Typos" option with path "/typos"
    Then the option page with path "/typos" is displayed

