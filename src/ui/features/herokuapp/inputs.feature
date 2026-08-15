@herokuapp
Feature: Inputs

  @happy-path
  Scenario: Enter a positive integer
    Given the user was on the "Inputs" page
    When the user enters 42
    Then the number input value is 42

  @alternate-success
  Scenario: Enter a negative integer
    Given the user was on the "Inputs" page
    When the user enters -7
    Then the number input value is -7

  @alternate-success
  Scenario: Increment the value with the keyboard
    Given the number input value was 10
    When the user presses ArrowUp
    Then the number input value is 11

  @negative
  Scenario: Reject alphabetic input
    Given the user was on the "Inputs" page
    When the user attempts to enter alphabetic text
    Then the number input contains no alphabetic value

  @negative
  Scenario: Clear an invalid number value
    Given an unsupported number representation was entered
    When the number input processes the value
    Then no unsupported value is retained

  @edge
  Scenario: Enter zero
    Given the user was on the "Inputs" page
    When the user enters 0
    Then the number input value is 0

  @edge
  Scenario: Enter a maximum safe integer
    Given the user was on the "Inputs" page
    When the user enters 9007199254740991
    Then the complete number input value is retained

  @navigation
  Scenario: Open the Inputs option
    Given the user was on the the-internet homepage
    When the user opens the "Inputs" option
    Then the "Inputs" page is displayed
