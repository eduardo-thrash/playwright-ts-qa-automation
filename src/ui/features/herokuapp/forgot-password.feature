@herokuapp
Feature: Forgot Password

  @happy-path
  Scenario: Request a password reminder with a valid email
    Given a valid email address was available
    When the user requests password recovery
    Then the email sent confirmation is displayed

  @alternate-success
  Scenario: Request recovery with an uppercase email address
    Given a valid uppercase email address was available
    When the user requests password recovery
    Then the email sent confirmation is displayed

  @alternate-success
  Scenario: Request recovery with a plus-addressed email
    Given a valid plus-addressed email was available
    When the user requests password recovery
    Then the email sent confirmation is displayed

  @negative
  Scenario: Prevent recovery with an empty email
    Given the user was on the "Forgot Password" page
    When the user submits an empty email
    Then the recovery request is not submitted
    And the email field remains required

  @negative
  Scenario: Prevent recovery with a malformed email
    Given a malformed email address was available
    When the user requests password recovery
    Then the recovery request is not submitted
    And the email field reports an invalid value

  @edge
  Scenario: Accept a long valid email address
    Given a long valid email address was available
    When the user requests password recovery
    Then the email sent confirmation is displayed

  @edge
  Scenario: Accept an email containing supported special characters
    Given a valid email with supported special characters was available
    When the user requests password recovery
    Then the email sent confirmation is displayed

  @navigation
  Scenario: Open the Forgot Password option
    Given the user was on the the-internet homepage
    When the user opens the "Forgot Password" option
    Then the "Forgot Password" page is displayed
