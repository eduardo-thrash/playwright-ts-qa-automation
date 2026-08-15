@herokuapp
Feature: JavaScript onload event error

  @happy-path
  Scenario: Capture the expected onload error
    Given JavaScript page errors were being observed
    When the user opens the JavaScript onload event error page
    Then one expected onload error is emitted
    And the explanatory page content is visible

  @alternate-success
  Scenario: Keep the document accessible after the onload error
    Given the onload error was emitted
    When the document finishes loading
    Then the explanatory page content is visible
    And the page remains accessible

  @alternate-success
  Scenario: Emit the expected error after reload
    Given the initial onload error was captured
    When the user reloads the page
    Then the expected onload error is emitted again
    And the explanatory content remains visible

  @negative
  Scenario: Prevent the onload error from replacing the document
    Given the onload error was emitted
    When the page content is displayed
    Then no browser error document replaces the example page
    And the expected explanatory text is visible

  @negative
  Scenario: Emit no unrelated page errors
    Given JavaScript page errors were being observed
    When the user opens the JavaScript onload event error page
    Then no unrelated page error is emitted
    And the expected onload error is identifiable

  @edge
  Scenario: Capture the error from the earliest page event
    Given the error listener was registered before navigation
    When the user opens the JavaScript onload event error page
    Then the initial onload error is captured

  @edge
  Scenario: Recognize the expected error across supported browsers
    Given the JavaScript error page was opened in a supported browser
    When the onload error is emitted
    Then the error identifies an undefined property access
    And the document remains visible

  @navigation
  Scenario: Open the JavaScript onload event error option
    Given the user was on the the-internet homepage
    When the user opens the "JavaScript onload event error" option
    Then the "JavaScript onload event error" page is displayed
