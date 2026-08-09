@navigation @herokuapp
Feature: Access Checkboxes

  Scenario: Open the Checkboxes option
    Given the user has opened the the-internet homepage
    When the user enters the "Checkboxes" option with path "/checkboxes"
    Then the option page with path "/checkboxes" is displayed

