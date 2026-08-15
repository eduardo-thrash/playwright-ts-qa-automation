@herokuapp
Feature: Checkboxes

  @happy-path
  Scenario: Set both checkboxes to the opposite state
    Given the first checkbox was unchecked and the second was checked
    When the user checks the first checkbox
    And unchecks the second checkbox
    Then the first checkbox is checked
    And the second checkbox is unchecked

  @alternate-success
  Scenario: Select the unchecked checkbox
    Given the first checkbox was unchecked
    When the user checks the first checkbox
    Then the first checkbox is checked

  @alternate-success
  Scenario: Clear the checked checkbox
    Given the second checkbox was checked
    When the user unchecks the second checkbox
    Then the second checkbox is unchecked

  @negative
  Scenario: Expose no unsupported third checkbox
    Given the user was on the "Checkboxes" page
    When the checkbox group is displayed
    Then exactly two checkboxes are available
    And no third checkbox is actionable

  @negative
  Scenario: Keep an already checked checkbox selected
    Given the first checkbox was checked
    When the user requests the checked state again
    Then the first checkbox remains checked
    And no additional checkbox is created

  @edge
  Scenario: Toggle a checkbox with the keyboard
    Given the first checkbox had keyboard focus
    When the user presses Space
    Then the first checkbox changes its selected state

  @edge
  Scenario: Set both checkboxes to the same state
    Given the user was on the "Checkboxes" page
    When the user checks both checkboxes
    Then both checkboxes are checked

  @navigation
  Scenario: Open the Checkboxes option
    Given the user was on the the-internet homepage
    When the user opens the "Checkboxes" option
    Then the "Checkboxes" page is displayed
