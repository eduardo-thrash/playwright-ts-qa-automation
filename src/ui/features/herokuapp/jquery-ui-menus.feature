@navigation @herokuapp
Feature: Access JQuery UI Menus

  Scenario: Open the JQuery UI Menus option
    Given the user has opened the the-internet homepage
    When the user enters the "JQuery UI Menus" option with path "/jqueryui/menu"
    Then the option page with path "/jqueryui/menu" is displayed

