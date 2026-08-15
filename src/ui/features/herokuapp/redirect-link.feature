@herokuapp
Feature: Redirect Link

  @happy-path
  Scenario: Follow the redirect to Status Codes
    Given the user was on the "Redirect Link" page
    When the user follows the redirect link
    Then the Status Codes page is displayed
    And the final path is "/status_codes"

  @alternate-success
  Scenario: Open status 200 after the redirect
    Given the redirect ended on the Status Codes page
    When the user opens status code 200
    Then the page reports status code 200
    And the response status is 200

  @alternate-success
  Scenario: Return to the redirect page through browser history
    Given the redirect ended on the Status Codes page
    When the user navigates back
    Then the Redirect Link page is displayed
    And the redirect link remains actionable

  @negative
  Scenario: Avoid remaining on the intermediate redirect endpoint
    Given the user was on the "Redirect Link" page
    When the user follows the redirect link
    Then the final page is not the intermediate redirect endpoint
    And the Status Codes page is displayed

  @negative
  Scenario: Expose no unsupported redirect destination
    Given the user was on the "Redirect Link" page
    When the available redirect actions are displayed
    Then only the documented redirect destination is actionable

  @edge
  Scenario: Reload the redirect landing page
    Given the redirect ended on the Status Codes page
    When the user reloads the page
    Then the Status Codes page remains displayed
    And all documented status links are available

  @edge
  Scenario: Follow the redirect after reopening its source page
    Given the redirect source page was reopened
    When the user follows the redirect link again
    Then the final path is "/status_codes"
    And the Status Codes content is visible

  @navigation
  Scenario: Open the Redirect Link option
    Given the user was on the the-internet homepage
    When the user opens the "Redirect Link" option
    Then the "Redirect Link" page is displayed
