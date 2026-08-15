@herokuapp
Feature: Slow Resources

  @happy-path
  Scenario: Complete the intentionally slow resource request
    Given sufficient time was available for the slow resource
    When the user opens the Slow Resources page
    Then the slow resource request completes successfully
    And the page content remains visible

  @alternate-success
  Scenario: Display page content before the slow resource completes
    Given the slow resource request was in progress
    When the document content becomes available
    Then the Slow Resources heading is visible
    And the explanation of the delayed request is visible

  @alternate-success
  Scenario: Complete the slow request after reload
    Given the Slow Resources page completed once
    When the user reloads the page with sufficient time
    Then the slow resource request completes again
    And the page remains usable

  @negative
  Scenario: Expose the delay when the timeout is too short
    Given a timeout shorter than the documented delay was configured
    When the user waits for the slow resource
    Then the resource does not complete within that timeout
    And the document content remains identifiable

  @negative
  Scenario: Avoid treating the delayed request as immediate
    Given the user opened the Slow Resources page
    When the slow request has only just started
    Then the slow resource is still pending
    And no successful completion is reported yet

  @edge
  Scenario: Keep content available when the slow request is aborted
    Given the slow resource request was in progress
    When the request is aborted
    Then the Slow Resources content remains visible
    And the page remains usable

  @edge
  Scenario: Handle concurrent slow-resource pages independently
    Given two browser pages were available
    When both pages open Slow Resources
    Then each page displays its own content
    And each slow request is tracked independently

  @navigation
  Scenario: Open the Slow Resources option
    Given the user was on the the-internet homepage
    When the user opens the "Slow Resources" option
    Then the "Slow Resources" page is displayed
