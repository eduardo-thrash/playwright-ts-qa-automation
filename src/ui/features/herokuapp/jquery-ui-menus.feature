@navigation
@herokuapp
Feature: Access JQuery UI Menus

  Scenario: Open the JQuery UI Menus option
    Given the user was on the the-internet homepage
    When the user opens the "JQuery UI Menus" option
    Then the "JQuery UI Menus" page is displayed
