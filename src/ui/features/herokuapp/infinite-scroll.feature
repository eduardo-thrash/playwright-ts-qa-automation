@herokuapp
Feature: Infinite Scroll

  @happy-path
  Scenario: Append content after scrolling to the bottom
    Given the initial infinite-scroll content was visible
    When the user scrolls to the bottom
    Then additional content is appended
    And the original content remains visible

  @alternate-success
  Scenario: Append content after multiple bottom scrolls
    Given the initial infinite-scroll content was visible
    When the user scrolls to the bottom multiple times
    Then multiple additional content blocks are appended

  @alternate-success
  Scenario: Keep appended content after returning to the top
    Given additional infinite-scroll content was appended
    When the user scrolls back to the top
    Then the appended content remains in the document
    And the initial content is visible

  @negative
  Scenario: Avoid appending content without scrolling
    Given the initial infinite-scroll content was visible
    When the user remains at the top of the page
    Then no additional content is appended

  @negative
  Scenario: Avoid appending content before reaching the loading threshold
    Given the initial infinite-scroll content was visible
    When the user scrolls only a small distance
    Then no additional content is appended

  @edge
  Scenario: Handle rapid repeated bottom scrolling
    Given the initial infinite-scroll content was visible
    When the user rapidly scrolls to the bottom repeatedly
    Then content blocks are appended without duplication errors
    And the page remains responsive

  @edge
  Scenario: Load more content with a resized viewport
    Given the viewport height was changed
    When the user scrolls to the bottom
    Then additional content is appended
    And the content remains readable

  @navigation
  Scenario: Open the Infinite Scroll option
    Given the user was on the the-internet homepage
    When the user opens the "Infinite Scroll" option
    Then the "Infinite Scroll" page is displayed
