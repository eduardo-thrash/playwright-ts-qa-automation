@navigation @herokuapp
Feature: Access Drag and Drop

  Scenario: Open the Drag and Drop option
    Given the user has opened the the-internet homepage
    When the user enters the "Drag and Drop" option with path "/drag_and_drop"
    Then the option page with path "/drag_and_drop" is displayed

