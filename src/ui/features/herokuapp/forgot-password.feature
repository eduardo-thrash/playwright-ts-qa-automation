@herokuapp
Feature: Forgot Password

  @happy-path
  Scenario: Accept a valid recovery email
    Given a valid email address was available
    When the user reviews the recovery form
    Then the recovery email value is accepted
    And the recovery action is available

  @alternate-success
  Scenario: Accept an uppercase recovery email address
    Given a valid uppercase email address was available
    When the user reviews the recovery form
    Then the recovery email value is accepted
    And the recovery action is available

  @alternate-success
  Scenario: Accept a plus-addressed recovery email
    Given a valid plus-addressed email was available
    When the user reviews the recovery form
    Then the recovery email value is accepted
    And the recovery action is available

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
  Scenario: Accept a long recovery email address
    Given a long valid email address was available
    When the user reviews the recovery form
    Then the recovery email value is accepted
    And the recovery action is available

  @edge
  Scenario: Accept supported special characters in a recovery email
    Given a valid email with supported special characters was available
    When the user reviews the recovery form
    Then the recovery email value is accepted
    And the recovery action is available

  @navigation
  Scenario: Open the Forgot Password option
    Given the user was on the the-internet homepage
    When the user opens the "Forgot Password" option
    Then the "Forgot Password" page is displayed
