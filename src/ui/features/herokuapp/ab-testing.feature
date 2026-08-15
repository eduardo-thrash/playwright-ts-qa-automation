@herokuapp
Feature: A/B Testing

  @happy-path
  Scenario: Display a supported experiment variant
    Given the user was on the "A/B Testing" page
    When the assigned experiment content loads
    Then a supported experiment heading is displayed
    And the experiment description is visible

  @alternate-success
  Scenario: Keep the assigned variant after a reload
    Given an experiment variant was assigned to the user
    When the user reloads the A/B Testing page
    Then the assigned experiment variant remains supported
    And the experiment description is visible

  @alternate-success
  Scenario: Assign a variant in a clean session
    Given the experiment cookies were cleared
    When the user opens the A/B Testing page again
    Then a supported experiment heading is displayed
    And the experiment content is not empty

  @negative
  Scenario: Ignore an unknown experiment cookie
    Given an unknown experiment cookie was stored
    When the user opens the A/B Testing page
    Then no unsupported experiment heading is displayed
    And the page remains usable

  @negative
  Scenario: Ignore an unsupported experiment query
    Given the user was on the "A/B Testing" page
    When the user requests an unsupported experiment variant
    Then no unsupported experiment heading is displayed
    And the page remains on the A/B Testing example

  @edge
  Scenario: Load the page without a previous experiment assignment
    Given no experiment assignment was available
    When the user opens the A/B Testing page
    Then a supported experiment heading is displayed
    And the experiment description is visible

  @edge
  Scenario: Keep every repeated response within the supported variants
    Given the user was on the "A/B Testing" page
    When the user reloads the page repeatedly
    Then every displayed heading belongs to the supported experiment variants
    And every response contains the experiment description

  @navigation
  Scenario: Open the A/B Testing option
    Given the user was on the the-internet homepage
    When the user opens the "A/B Testing" option
    Then the "A/B Testing" page is displayed
