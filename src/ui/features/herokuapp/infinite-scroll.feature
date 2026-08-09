@navigation @herokuapp
Feature: Access Infinite Scroll

  Scenario: Open the Infinite Scroll option
    Given the user has opened the the-internet homepage
    When the user enters the "Infinite Scroll" option with path "/infinite_scroll"
    Then the option page with path "/infinite_scroll" is displayed

