@navigation @herokuapp
Feature: Access Redirect Link

  Scenario: Open the Redirect Link option
    Given the user has opened the the-internet homepage
    When the user enters the "Redirect Link" option with path "/redirector"
    Then the option page with path "/redirector" is displayed

