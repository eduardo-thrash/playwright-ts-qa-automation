@herokuapp
Feature: Nested Frames

  @happy-path
  Scenario: Display all nested frame regions
    Given the user was on the "Nested Frames" page
    When every nested frame finishes loading
    Then LEFT, MIDDLE, RIGHT, and BOTTOM are visible
    And the top and bottom frame groups are attached

  @alternate-success
  Scenario: Read every frame in the top group
    Given the top nested frame group was loaded
    When the user accesses its child frames
    Then LEFT, MIDDLE, and RIGHT are visible
    And each value belongs to a different child frame

  @alternate-success
  Scenario: Read the bottom frame
    Given the bottom nested frame was loaded
    When the user accesses its content
    Then BOTTOM is visible
    And the bottom frame remains attached

  @negative
  Scenario: Keep nested content outside the parent body
    Given every nested frame was loaded
    When the parent document body is inspected
    Then the frame values are not direct parent-body content
    And the nested frames remain attached

  @negative
  Scenario: Expose no undocumented fifth content frame
    Given every nested frame was loaded
    When the frame hierarchy is inspected
    Then only four content frames are available
    And no fifth content frame is attached

  @edge
  Scenario: Preserve all nested regions after reload
    Given every nested frame was loaded
    When the user reloads the Nested Frames page
    Then LEFT, MIDDLE, RIGHT, and BOTTOM are visible again

  @edge
  Scenario: Access the deepest child frame directly
    Given the nested frame hierarchy was loaded
    When the user accesses the middle child through the top frame
    Then MIDDLE is visible
    And the sibling frames remain attached

  @navigation
  Scenario: Open the Nested Frames option
    Given the user was on the the-internet homepage
    When the user opens the "Nested Frames" option
    Then the "Nested Frames" page is displayed
