@navigation
@herokuapp
Feature: Access Disappearing Elements

  Scenario: Open the Disappearing Elements option
    Given the user was on the the-internet homepage
    When the user opens the "Disappearing Elements" option
    Then the "Disappearing Elements" page is displayed
