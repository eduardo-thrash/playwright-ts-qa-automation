@herokuapp
Feature: Notification Messages

  @happy-path
  Scenario: Display a successful notification
    Given the user was on the "Notification Messages" page
    When the user requests notifications until a successful action is returned
    Then the successful notification is visible
    And only one notification is displayed

  @alternate-success
  Scenario: Display a supported notification after an action
    Given the Notification Messages page was visible
    When the user requests a new notification
    Then a supported notification message is visible
    And the page content remains available

  @alternate-success
  Scenario: Close a displayed notification
    Given a notification message was visible
    When the user closes the notification
    Then the notification is hidden
    And the page remains usable

  @negative
  Scenario: Reject an empty notification
    Given the Notification Messages page was visible
    When the user requests a new notification
    Then the displayed notification is not empty

  @negative
  Scenario: Reject an unknown notification value
    Given a notification message was displayed
    When the message content is evaluated
    Then the message belongs to the supported notification set
    And no unknown notification text is accepted

  @edge
  Scenario: Replace a notification with the next message
    Given a notification message was visible
    When the user requests another notification
    Then one current notification is visible
    And no duplicate notification container is displayed

  @edge
  Scenario: Request notifications repeatedly
    Given the Notification Messages page was visible
    When the user requests notifications repeatedly
    Then every displayed message belongs to the supported set
    And the page remains responsive

  @navigation
  Scenario: Open the Notification Messages option
    Given the user was on the the-internet homepage
    When the user opens the "Notification Messages" option
    Then the "Notification Messages" page is displayed
