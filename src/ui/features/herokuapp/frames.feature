@herokuapp
Feature: Frames

  @happy-path
  Scenario: Edit content inside the iFrame
    Given the user was on the iFrame example
    When the user replaces the editor content with "Updated frame content"
    Then the editor contains "Updated frame content"

  @alternate-success
  Scenario: Open the Nested Frames example
    Given the user was on the "Frames" page
    When the user opens Nested Frames
    Then the top and bottom frame groups are present
    And all documented frame contents are visible

  @alternate-success
  Scenario: Display the initial iFrame content
    Given the user was on the "Frames" page
    When the user opens the iFrame example
    Then the editor displays "Your content goes here."
    And the editor is available

  @negative
  Scenario: Keep frame content outside the parent document
    Given the iFrame example was visible
    When the parent document content is inspected
    Then the editor text is not part of the parent document body
    And the editor remains inside its frame

  @negative
  Scenario: Expose no unsupported frame example
    Given the user was on the "Frames" page
    When the available frame examples are displayed
    Then only Nested Frames and iFrame are actionable
    And no unsupported frame example is available

  @edge
  Scenario: Enter multiline content in the iFrame editor
    Given the user was on the iFrame example
    When the user enters multiline editor content
    Then every entered line is present in the editor

  @edge
  Scenario: Switch between both frame examples
    Given the user was on the "Frames" page
    When the user opens Nested Frames and returns to open iFrame
    Then the iFrame editor is available
    And its initial content is visible

  @navigation
  Scenario: Open the Frames option
    Given the user was on the the-internet homepage
    When the user opens the "Frames" option
    Then the "Frames" page is displayed
