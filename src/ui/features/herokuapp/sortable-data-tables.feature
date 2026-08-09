@navigation @herokuapp
Feature: Access Sortable Data Tables

  Scenario: Open the Sortable Data Tables option
    Given the user has opened the the-internet homepage
    When the user enters the "Sortable Data Tables" option with path "/tables"
    Then the option page with path "/tables" is displayed

