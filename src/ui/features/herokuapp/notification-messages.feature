@navigation
@herokuapp
Feature: Access Notification Messages

  Scenario: Open the Notification Messages option
    Given the user was on the the-internet homepage
    When the user opens the "Notification Messages" option
    Then the "Notification Messages" page is displayed
