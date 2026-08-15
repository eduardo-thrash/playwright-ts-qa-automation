@herokuapp
Feature: Horizontal Slider

  @happy-path
  Scenario: Set the slider to a middle value
    Given the horizontal slider was set to 0
    When the user moves the slider to 3.5
    Then the displayed slider value is 3.5

  @alternate-success
  Scenario: Set the slider to its minimum
    Given the horizontal slider had a value above 0
    When the user moves the slider to its minimum
    Then the displayed slider value is 0

  @alternate-success
  Scenario: Set the slider to its maximum
    Given the horizontal slider had a value below 5
    When the user moves the slider to its maximum
    Then the displayed slider value is 5

  @negative
  Scenario: Prevent a value below the minimum
    Given the horizontal slider was set to 0
    When the user attempts to decrease the value
    Then the displayed slider value remains 0

  @negative
  Scenario: Prevent a value above the maximum
    Given the horizontal slider was set to 5
    When the user attempts to increase the value
    Then the displayed slider value remains 5

  @edge
  Scenario: Set the smallest supported increment
    Given the horizontal slider was set to 0
    When the user increases the slider once
    Then the displayed slider value is 0.5

  @edge
  Scenario: Return to the same value after opposite movements
    Given the horizontal slider was set to 2.5
    When the user increases and decreases the slider once
    Then the displayed slider value remains 2.5

  @navigation
  Scenario: Open the Horizontal Slider option
    Given the user was on the the-internet homepage
    When the user opens the "Horizontal Slider" option
    Then the "Horizontal Slider" page is displayed
