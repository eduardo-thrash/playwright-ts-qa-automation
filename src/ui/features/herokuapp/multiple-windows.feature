@herokuapp
Feature: Multiple Windows

  @happy-path
  Scenario: Open and validate a new window
    Given the user was on the "Multiple Windows" page
    When the user opens the new window
    Then a second window is created
    And the new window heading is "New Window"

  @alternate-success
  Scenario: Keep the original window available
    Given the new window was opened
    When the user returns to the original window
    Then the original window heading is "Opening a new window"
    And the Click Here link remains available

  @alternate-success
  Scenario: Close the new window and continue in the original
    Given the new window was opened
    When the user closes the new window
    Then the original window remains open
    And its content is visible

  @negative
  Scenario: Avoid opening a window without activating the link
    Given the user was on the "Multiple Windows" page
    When the user interacts outside the new-window link
    Then no additional window is created

  @negative
  Scenario: Prevent the new window from replacing the original
    Given the user was on the "Multiple Windows" page
    When the user opens the new window
    Then the original window remains open
    And its URL remains unchanged

  @edge
  Scenario: Open two independent new windows
    Given the user was on the "Multiple Windows" page
    When the user activates the new-window link twice
    Then two additional windows are created
    And each new window displays "New Window"

  @edge
  Scenario: Switch repeatedly between the original and new window
    Given the new window was opened
    When the user switches between both windows repeatedly
    Then both windows remain accessible
    And each window retains its expected heading

  @navigation
  Scenario: Open the Multiple Windows option
    Given the user was on the the-internet homepage
    When the user opens the "Multiple Windows" option
    Then the "Multiple Windows" page is displayed
