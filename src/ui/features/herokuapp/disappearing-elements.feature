@navigation @herokuapp
Feature: Access Disappearing Elements

  Scenario: Open the Disappearing Elements option
    Given the user has opened the the-internet homepage
    When the user enters the "Disappearing Elements" option with path "/disappearing_elements"
    Then the option page with path "/disappearing_elements" is displayed

