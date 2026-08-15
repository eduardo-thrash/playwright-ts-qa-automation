@herokuapp
Feature: Status Codes

  @happy-path
  Scenario: Open the successful status code
    Given the user was on the "Status Codes" page
    When the user opens status code 200
    Then the response status is 200
    And the page reports status code 200

  @alternate-success
  Scenario: Open the redirect status example
    Given the user was on the "Status Codes" page
    When the user opens status code 301
    Then the response status is 301
    And the page reports status code 301

  @alternate-success
  Scenario: Return from a status detail page
    Given a status detail page was visible
    When the user follows the return link
    Then the Status Codes page is displayed
    And all documented status links are visible

  @negative
  Scenario: Open the not-found status example
    Given the user was on the "Status Codes" page
    When the user opens status code 404
    Then the response status is 404
    And the page reports status code 404

  @negative
  Scenario: Open the server-error status example
    Given the user was on the "Status Codes" page
    When the user opens status code 500
    Then the response status is 500
    And the page reports status code 500

  @edge
  Scenario: Request an undocumented status code
    Given an undocumented status-code path was available
    When the user requests that status-code path
    Then the response is not successful
    And no documented status detail is displayed

  @edge
  Scenario: Navigate through every documented status example
    Given the user was on the "Status Codes" page
    When the user opens each documented status code
    Then each response matches its selected status code
    And each detail page identifies that status code

  @navigation
  Scenario: Open the Status Codes option
    Given the user was on the the-internet homepage
    When the user opens the "Status Codes" option
    Then the "Status Codes" page is displayed
