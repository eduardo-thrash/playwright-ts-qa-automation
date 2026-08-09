@navigation
@herokuapp
Feature: Access Add/Remove Elements

  Scenario: Open the Add/Remove Elements option
    Given the user was on the the-internet homepage
    When the user opens the "Add/Remove Elements" option
    Then the "Add/Remove Elements" page is displayed
