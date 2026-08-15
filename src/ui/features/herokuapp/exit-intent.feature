@herokuapp
Feature: Exit Intent

  @happy-path
  Scenario: Display and close the exit-intent modal
    Given the user was on the "Exit Intent" page
    When the pointer leaves the viewport
    Then the exit-intent modal is visible
    When the user closes the modal
    Then the modal is hidden

  @alternate-success
  Scenario: Continue using the page after closing the modal
    Given the exit-intent modal was closed
    When the user returns the pointer to the page
    Then the Exit Intent content is accessible
    And no overlay blocks the page

  @alternate-success
  Scenario: Trigger exit intent from the top boundary
    Given the pointer was inside the viewport
    When the pointer crosses the top viewport boundary
    Then the exit-intent modal is visible
    And its title is "This is a modal window"

  @negative
  Scenario: Ignore pointer movement inside the viewport
    Given the pointer was inside the viewport
    When the user moves the pointer within the page
    Then the exit-intent modal is not visible

  @negative
  Scenario: Ignore a regular click as exit intent
    Given the user was on the "Exit Intent" page
    When the user clicks the page content
    Then the exit-intent modal is not visible

  @edge
  Scenario: Close the modal immediately after it appears
    Given the pointer triggered the exit-intent modal
    When the user immediately closes the modal
    Then the modal is hidden
    And the page remains usable

  @edge
  Scenario: Keep only one modal during repeated exit movement
    Given the user was on the "Exit Intent" page
    When the pointer crosses the exit boundary repeatedly
    Then at most one exit-intent modal is visible
    And one Close action is available

  @navigation
  Scenario: Open the Exit Intent option
    Given the user was on the the-internet homepage
    When the user opens the "Exit Intent" option
    Then the "Exit Intent" page is displayed
