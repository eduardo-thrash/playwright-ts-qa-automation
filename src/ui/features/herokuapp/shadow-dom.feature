@herokuapp
Feature: Shadow DOM

  @happy-path
  Scenario: Display content from both shadow hosts
    Given the user was on the "Shadow DOM" page
    When the shadow content finishes rendering
    Then both shadow hosts display their expected text
    And the shadow list item is visible

  @alternate-success
  Scenario: Read the text from the first shadow host
    Given the first shadow host was rendered
    When the user accesses its shadow content
    Then "Let's have some different text!" is visible

  @alternate-success
  Scenario: Read the list from the second shadow host
    Given the second shadow host was rendered
    When the user accesses its shadow content
    Then the shadow list contains two items
    And "In a list!" is visible

  @negative
  Scenario: Expose no undocumented third shadow host
    Given the shadow content finished rendering
    When the shadow host collection is inspected
    Then exactly two shadow hosts are present

  @negative
  Scenario: Prevent missing shadow content from appearing as valid
    Given every shadow host was rendered
    When the shadow content is inspected
    Then no expected shadow text is empty
    And no expected list item is missing

  @edge
  Scenario: Preserve shadow content after reload
    Given the shadow content was visible
    When the user reloads the Shadow DOM page
    Then both shadow hosts display their expected content again

  @edge
  Scenario: Distinguish repeated text across shadow hosts
    Given both shadow hosts were rendered
    When the repeated shadow text is accessed
    Then the text appears in both documented shadow locations
    And the list-only text appears once

  @navigation
  Scenario: Open the Shadow DOM option
    Given the user was on the the-internet homepage
    When the user opens the "Shadow DOM" option
    Then the "Shadow DOM" page is displayed
