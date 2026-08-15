@herokuapp
Feature: Dynamic Controls

  @happy-path
  Scenario: Enable and use the dynamic input
    Given the dynamic input was disabled
    When the user enables the input
    And enters "Enabled input"
    Then the input contains "Enabled input"
    And the enabled confirmation message is visible

  @alternate-success
  Scenario: Remove and restore the checkbox
    Given the dynamic checkbox was visible
    When the user removes the checkbox
    And adds the checkbox again
    Then the checkbox is visible
    And the add confirmation message is replaced

  @alternate-success
  Scenario: Disable an enabled input
    Given the dynamic input was enabled
    When the user disables the input
    Then the input is disabled
    And the disabled confirmation message is visible

  @negative
  Scenario: Prevent input while the control is disabled
    Given the dynamic input was disabled
    When the user attempts to enter text
    Then the input remains empty
    And the input remains disabled

  @negative
  Scenario: Prevent duplicate actions while a control is loading
    Given a dynamic control action was in progress
    When the user attempts the same action again
    Then only one state change is completed
    And only one resulting control is visible

  @edge
  Scenario: Operate both dynamic control sections independently
    Given the checkbox was visible and the input was disabled
    When the user removes the checkbox
    And enables the input
    Then the checkbox is absent
    And the input is enabled

  @edge
  Scenario: Restore the initial control state
    Given the checkbox was removed and the input was enabled
    When the user adds the checkbox
    And disables the input
    Then the checkbox is visible
    And the input is disabled

  @navigation
  Scenario: Open the Dynamic Controls option
    Given the user was on the the-internet homepage
    When the user opens the "Dynamic Controls" option
    Then the "Dynamic Controls" page is displayed
