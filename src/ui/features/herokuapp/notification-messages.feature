@navigation @herokuapp
Feature: Access Notification Messages

  Scenario: Open the Notification Messages option
    Given the user has opened the the-internet homepage
    When the user enters the "Notification Messages" option with path "/notification_message_rendered"
    Then the option page with path "/notification_message_rendered" is displayed

