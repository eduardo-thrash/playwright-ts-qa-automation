@herokuapp
Feature: Typos

  @happy-path
  Scenario: Display a documented typo variant
    Given the user was on the "Typos" page
    When the dynamic sentence loads
    Then the sentence matches one documented typo variant
    And the explanatory text is visible

  @alternate-success
  Scenario: Display the correctly spelled variant
    Given the Typos page was reloaded until the correct variant appeared
    When the dynamic sentence is displayed
    Then the sentence contains "won't"
    And no typo appears in that word

  @alternate-success
  Scenario: Display the intentional typo variant
    Given the Typos page was reloaded until the typo variant appeared
    When the dynamic sentence is displayed
    Then the sentence contains "won,t"
    And the explanatory text remains visible

  @negative
  Scenario: Reject an undocumented sentence variant
    Given the dynamic sentence was displayed
    When its content is evaluated
    Then the sentence belongs to the documented variant set
    And no undocumented variant is accepted

  @negative
  Scenario: Prevent an empty dynamic sentence
    Given the user was on the "Typos" page
    When the dynamic sentence loads
    Then the sentence is not empty

  @edge
  Scenario: Keep every repeated result within the accepted set
    Given the user was on the "Typos" page
    When the user reloads the Typos page repeatedly
    Then every sentence belongs to the documented variant set
    And every page remains usable

  @edge
  Scenario: Distinguish the variants by punctuation
    Given a documented typo variant was displayed
    When the sentence punctuation is inspected
    Then the sentence contains either an apostrophe or a comma at the variable word
    And the rest of the sentence remains unchanged

  @navigation
  Scenario: Open the Typos option
    Given the user was on the the-internet homepage
    When the user opens the "Typos" option
    Then the "Typos" page is displayed
