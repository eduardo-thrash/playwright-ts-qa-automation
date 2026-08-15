@herokuapp
Feature: Entry Ad

  @happy-path
  Scenario: Close the entry modal
    Given the entry modal was visible
    When the user closes the modal
    Then the modal is hidden
    And the Entry Ad content is accessible

  @alternate-success
  Scenario: Re-enable a closed entry modal
    Given the entry modal was closed
    When the user re-enables the entry modal
    Then the entry modal is visible again
    And its title is "This is a modal window"

  @alternate-success
  Scenario: Keep a closed modal hidden after reload
    Given the entry modal was closed
    When the user reloads the Entry Ad page
    Then the modal remains hidden
    And the page content is visible

  @negative
  Scenario: Block underlying interaction while the modal is open
    Given the entry modal was visible
    When the user attempts to interact with the covered page content
    Then the modal remains visible
    And the covered interaction is not completed

  @negative
  Scenario: Prevent duplicate entry modals
    Given the entry modal was visible
    When the modal activation is requested again
    Then only one entry modal is visible

  @edge
  Scenario: Display the modal in a clean browser context
    Given no Entry Ad state was stored
    When the user opens the Entry Ad page
    Then the entry modal is visible
    And the Close action is available

  @edge
  Scenario: Re-enable and close the modal repeatedly
    Given the Entry Ad page was visible
    When the user repeatedly re-enables and closes the modal
    Then at most one modal is visible at a time
    And the page remains usable

  @navigation
  Scenario: Open the Entry Ad option
    Given the user was on the the-internet homepage
    When the user opens the "Entry Ad" option
    Then the "Entry Ad" page is displayed
