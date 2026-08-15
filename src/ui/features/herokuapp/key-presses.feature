@herokuapp
Feature: Key Presses

  @happy-path
  Scenario: Report the Escape key
    Given the key input had focus
    When the user presses Escape
    Then the result is "You entered: ESCAPE"

  @alternate-success
  Scenario: Report a letter key
    Given the key input had focus
    When the user presses A
    Then the result is "You entered: A"

  @alternate-success
  Scenario: Report the Enter key
    Given the key input had focus
    When the user presses Enter
    Then the result is "You entered: ENTER"

  @negative
  Scenario: Display no key result before input
    Given the user was on the "Key Presses" page
    When no key was pressed
    Then no entered-key result is displayed

  @negative
  Scenario: Replace the previous key result instead of appending
    Given the result displayed "You entered: A"
    When the user presses B
    Then the result is "You entered: B"
    And the previous result is not appended

  @edge
  Scenario: Report an arrow key
    Given the key input had focus
    When the user presses ArrowUp in the key input
    Then the result is "You entered: UP"

  @edge
  Scenario: Report the Space key
    Given the key input had focus
    When the user presses Space in the key input
    Then the result identifies the Space key

  @navigation
  Scenario: Open the Key Presses option
    Given the user was on the the-internet homepage
    When the user opens the "Key Presses" option
    Then the "Key Presses" page is displayed
