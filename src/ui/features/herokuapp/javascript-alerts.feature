@herokuapp
Feature: JavaScript Alerts

  @happy-path
  Scenario: Submit text through a JavaScript prompt
    Given the user was on the "JavaScript Alerts" page
    When the user enters "Playwright" in the JavaScript prompt
    Then the result is "You entered: Playwright"

  @alternate-success
  Scenario: Accept a JavaScript alert
    Given the user was on the "JavaScript Alerts" page
    When the user accepts the JavaScript alert
    Then the result is "You successfully clicked an alert"

  @alternate-success
  Scenario: Accept a JavaScript confirmation
    Given the user was on the "JavaScript Alerts" page
    When the user accepts the JavaScript confirmation
    Then the result is "You clicked: Ok"

  @negative
  Scenario: Dismiss a JavaScript confirmation
    Given the user was on the "JavaScript Alerts" page
    When the user dismisses the JavaScript confirmation
    Then the result is "You clicked: Cancel"

  @negative
  Scenario: Dismiss a JavaScript prompt
    Given the user was on the "JavaScript Alerts" page
    When the user dismisses the JavaScript prompt
    Then the result is "You entered: null"

  @edge
  Scenario: Submit an empty JavaScript prompt
    Given the user was on the "JavaScript Alerts" page
    When the user accepts the JavaScript prompt without text
    Then the result is "You entered:"

  @edge
  Scenario: Submit Unicode text through the prompt
    Given the user was on the "JavaScript Alerts" page
    When the user enters Unicode text in the JavaScript prompt
    Then the complete Unicode text is displayed in the result

  @navigation
  Scenario: Open the JavaScript Alerts option
    Given the user was on the the-internet homepage
    When the user opens the "JavaScript Alerts" option
    Then the "JavaScript Alerts" page is displayed
