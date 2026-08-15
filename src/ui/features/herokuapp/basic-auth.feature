@herokuapp
Feature: Basic Auth

  @happy-path
  Scenario: Authenticate with valid credentials
    Given valid Basic Auth credentials were available
    When the user authenticates with username "admin" and password "admin"
    Then the Basic Auth success message is displayed

  @alternate-success
  Scenario: Reload an authenticated page
    Given the user was authenticated with Basic Auth
    When the user reloads the protected page
    Then access remains authorized
    And the Basic Auth success message is displayed

  @alternate-success
  Scenario: Revisit the protected resource in the authenticated context
    Given the user was authenticated with Basic Auth
    When the user leaves and revisits the protected resource
    Then access is authorized again
    And the protected content is visible

  @negative
  Scenario: Reject an invalid username
    Given invalid Basic Auth credentials were available
    When the user authenticates with an invalid username and a valid password
    Then access to the protected content is denied

  @negative
  Scenario: Reject an invalid password
    Given invalid Basic Auth credentials were available
    When the user authenticates with a valid username and an invalid password
    Then access to the protected content is denied

  @edge
  Scenario: Reject empty credentials
    Given empty Basic Auth credentials were available
    When the user requests the protected resource
    Then access to the protected content is denied

  @edge
  Scenario: Reject credentials with surrounding whitespace
    Given Basic Auth credentials with surrounding whitespace were available
    When the user requests the protected resource
    Then access to the protected content is denied

  @navigation
  Scenario: Open the Basic Auth option
    Given the user was on the the-internet homepage
    When the user opens the "Basic Auth" option
    Then the "Basic Auth" page is displayed
