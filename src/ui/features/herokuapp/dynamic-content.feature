@herokuapp
Feature: Dynamic Content

  @happy-path
  Scenario: Load different dynamic content after a reload
    Given the dynamic content blocks were visible
    When the user reloads the Dynamic Content page
    Then at least one content block has changed
    And three content blocks are visible

  @alternate-success
  Scenario: Load the static content variant
    Given the user was on the "Dynamic Content" page
    When the user opens the static content variant
    Then the documented static content is displayed
    And three content blocks are visible

  @alternate-success
  Scenario: Keep static content unchanged after reload
    Given the static content variant was visible
    When the user reloads the page
    Then every static content block remains unchanged
    And every static image source remains unchanged

  @negative
  Scenario: Ignore an unsupported content mode
    Given the user was on the "Dynamic Content" page
    When the user requests an unsupported content mode
    Then three supported content blocks are displayed
    And no unsupported content block is added

  @negative
  Scenario: Prevent empty dynamic records
    Given the dynamic content finished loading
    When the content blocks are displayed
    Then no content block is empty
    And every block has an associated image

  @edge
  Scenario: Preserve the content structure across repeated reloads
    Given the user was on the "Dynamic Content" page
    When the user reloads the page repeatedly
    Then every response contains three content blocks
    And every response remains usable

  @edge
  Scenario: Open the static variant from the inline link
    Given the dynamic content page was visible
    When the user follows the static content link
    Then the static content query is present
    And the documented static content is displayed

  @navigation
  Scenario: Open the Dynamic Content option
    Given the user was on the the-internet homepage
    When the user opens the "Dynamic Content" option
    Then the "Dynamic Content" page is displayed
