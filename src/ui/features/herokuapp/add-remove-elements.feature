@navigation @herokuapp
Feature: Access Add/Remove Elements

  Scenario: Open the Add/Remove Elements option
    Given the user has opened the the-internet homepage
    When the user enters the "Add/Remove Elements" option with path "/add_remove_elements/"
    Then the option page with path "/add_remove_elements/" is displayed

