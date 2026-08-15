@herokuapp
Feature: Form Authentication

  @happy-path
  Scenario: Log in with valid credentials
    Given valid form credentials were available
    When the user logs in with username "tomsmith" and password "SuperSecretPassword!"
    Then the secure area is displayed
    And the successful login message is visible

  @alternate-success
  Scenario: Log out from the secure area
    Given the user was logged in to the secure area
    When the user logs out
    Then the Login page is displayed
    And the successful logout message is visible

  @alternate-success
  Scenario: Keep the authenticated session after reload
    Given the user was logged in to the secure area
    When the user reloads the secure page
    Then the secure area remains displayed
    And the Logout action is visible

  @negative
  Scenario: Reject an invalid username
    Given an invalid username and a valid password were available
    When the user submits the login form
    Then the Login page remains displayed
    And the invalid username message is visible

  @negative
  Scenario: Reject an invalid password
    Given a valid username and an invalid password were available
    When the user submits the login form
    Then the Login page remains displayed
    And the invalid password message is visible

  @edge
  Scenario: Reject empty login fields
    Given the user was on the "Form Authentication" page
    When the user submits empty login fields
    Then the Login page remains displayed
    And an invalid username message is visible

  @edge
  Scenario: Reject valid credentials with surrounding whitespace
    Given valid credentials with surrounding whitespace were available
    When the user submits the login form
    Then the Login page remains displayed
    And an authentication error message is visible

  @navigation
  Scenario: Open the Form Authentication option
    Given the user was on the the-internet homepage
    When the user opens the "Form Authentication" option
    Then the "Form Authentication" page is displayed
