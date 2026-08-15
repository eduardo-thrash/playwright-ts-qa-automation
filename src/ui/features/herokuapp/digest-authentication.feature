@herokuapp
Feature: Digest Authentication

  @happy-path
  Scenario: Authenticate with valid digest credentials
    Given valid Digest Authentication credentials were available
    When the user authenticates with username "admin" and password "admin"
    Then the Digest Authentication success message is displayed

  @alternate-success
  Scenario: Reload an authenticated digest resource
    Given the user was authenticated with Digest Authentication
    When the user reloads the protected page
    Then access remains authorized
    And the success message is displayed

  @alternate-success
  Scenario: Revisit the digest resource in the authenticated context
    Given the user was authenticated with Digest Authentication
    When the user leaves and revisits the protected resource
    Then access is authorized again
    And the protected content is visible

  @negative
  Scenario: Reject an invalid digest username
    Given invalid Digest Authentication credentials were available
    When the user authenticates with an invalid username and a valid password
    Then access to the protected content is denied

  @negative
  Scenario: Reject an invalid digest password
    Given invalid Digest Authentication credentials were available
    When the user authenticates with a valid username and an invalid password
    Then access to the protected content is denied

  @edge
  Scenario: Reject empty digest credentials
    Given empty Digest Authentication credentials were available
    When the user requests the protected resource
    Then access to the protected content is denied

  @edge
  Scenario: Reject digest credentials with surrounding whitespace
    Given Digest Authentication credentials with surrounding whitespace were available
    When the user requests the protected resource
    Then access to the protected content is denied

  @navigation
  Scenario: Open the Digest Authentication option
    Given the user was on the the-internet homepage
    When the user opens the "Digest Authentication" option
    Then the "Digest Authentication" page is displayed
