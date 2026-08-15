@herokuapp
Feature: Dropdown

  @happy-path
  Scenario: Select Option 2
    Given the user was on the "Dropdown" page
    When the user selects "Option 2"
    Then "Option 2" is selected

  @alternate-success
  Scenario: Select Option 1
    Given the user was on the "Dropdown" page
    When the user selects "Option 1"
    Then "Option 1" is selected

  @alternate-success
  Scenario: Change the selected option
    Given "Option 1" was selected
    When the user selects "Option 2"
    Then "Option 2" is selected
    And "Option 1" is not selected

  @negative
  Scenario: Prevent selection of the disabled placeholder
    Given the user was on the "Dropdown" page
    When the user attempts to select the placeholder
    Then the placeholder remains disabled
    And no enabled option is selected

  @negative
  Scenario: Reject an unsupported option value
    Given the user was on the "Dropdown" page
    When the user requests an unsupported option
    Then no unsupported option is selected
    And the available options remain unchanged

  @edge
  Scenario: Select an option with the keyboard
    Given the dropdown had keyboard focus
    When the user selects the next option with the keyboard
    Then "Option 1" is selected

  @edge
  Scenario: Select the current option again
    Given "Option 2" was selected
    When the user selects "Option 2" again
    Then "Option 2" remains selected
    And only one option is selected

  @navigation
  Scenario: Open the Dropdown option
    Given the user was on the the-internet homepage
    When the user opens the "Dropdown" option
    Then the "Dropdown" page is displayed
