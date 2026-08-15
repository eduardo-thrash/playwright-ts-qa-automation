@herokuapp
Feature: Basic Auth

  @happy-path
  Scenario: Authenticate with valid credentials
    Given valid Basic Auth credentials were available
    When the user authenticates to Basic Auth with username "admin" and password "admin"
    Then the Basic Auth success message is displayed

  @alternate-success
  Scenario: Reload an authenticated page
    Given the user was authenticated with Basic Auth
    When the user reloads the Basic Auth protected page
    Then Basic Auth access remains authorized
    And the Basic Auth success message is displayed

  @alternate-success
  Scenario: Revisit the protected resource in the authenticated context
    Given the user was authenticated with Basic Auth
    When the user leaves and revisits the Basic Auth protected resource
    Then Basic Auth access is authorized again
    And the Basic Auth protected content is visible

  @negative
  Scenario: Reject an invalid username
    Given invalid Basic Auth credentials were available
    When the user authenticates to Basic Auth with an invalid username and a valid password
    Then Basic Auth access to the protected content is denied

  @negative
  Scenario: Reject an invalid password
    Given invalid Basic Auth credentials were available
    When the user authenticates to Basic Auth with a valid username and an invalid password
    Then Basic Auth access to the protected content is denied

  @edge
  Scenario: Reject empty credentials
    Given empty Basic Auth credentials were available
    When the user requests the Basic Auth protected resource
    Then Basic Auth access to the protected content is denied

  @edge
  Scenario: Reject credentials with surrounding whitespace
    Given Basic Auth credentials with surrounding whitespace were available
    When the user requests the Basic Auth protected resource
    Then Basic Auth access to the protected content is denied

  @navigation
  Scenario: Open the Basic Auth option
    Given the user was on the the-internet homepage
    When the user opens the "Basic Auth" option
    Then the "Basic Auth" page is displayed
