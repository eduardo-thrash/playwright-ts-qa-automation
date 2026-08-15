@herokuapp
Feature: Drag and Drop

  @happy-path
  Scenario: Move column A onto column B
    Given column A was before column B
    When the user drags column A onto column B
    Then column B is before column A

  @alternate-success
  Scenario: Restore the original column order
    Given column B was before column A
    When the user drags column B onto column A
    Then column A is before column B

  @alternate-success
  Scenario: Move column B onto column A
    Given column A was before column B
    When the user drags column B onto column A
    Then column B is before column A

  @negative
  Scenario: Ignore a drop outside the columns
    Given column A was before column B
    When the user drags column A outside the drop targets
    Then column A remains before column B

  @negative
  Scenario: Ignore a column dropped onto itself
    Given column A was before column B
    When the user drags column A onto itself
    Then column A remains before column B

  @edge
  Scenario: Swap the columns repeatedly
    Given column A was before column B
    When the user swaps the columns twice
    Then column A is before column B

  @edge
  Scenario: Drop a column at the boundary of the other column
    Given column A was before column B
    When the user drags column A to the boundary of column B
    Then column B is before column A

  @navigation
  Scenario: Open the Drag and Drop option
    Given the user was on the the-internet homepage
    When the user opens the "Drag and Drop" option
    Then the "Drag and Drop" page is displayed
