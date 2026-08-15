@herokuapp
Feature: Challenging DOM

  @happy-path
  Scenario: Interact with a dynamic button
    Given the user was on the "Challenging DOM" page
    When the user activates a dynamic button
    Then the button receives a new dynamic identifier
    And the data table remains visible

  @alternate-success
  Scenario: Open the edit action for the first row
    Given the Challenging DOM table was visible
    When the user opens the edit action for the first row
    Then the page URL identifies the edit action
    And the first row remains visible

  @alternate-success
  Scenario: Open the delete action for the last row
    Given the Challenging DOM table was visible
    When the user opens the delete action for the last row
    Then the page URL identifies the delete action
    And the last row remains visible

  @negative
  Scenario: Exclude actions for a nonexistent row
    Given the Challenging DOM table was visible
    When the user looks for an action on a nonexistent row
    Then no action is available for that row
    And the table remains unchanged

  @negative
  Scenario: Ignore an unsupported table action
    Given the user was on the "Challenging DOM" page
    When an unsupported table action is requested
    Then no table row is modified
    And the table remains visible

  @edge
  Scenario: Locate the final row without relying on dynamic identifiers
    Given the Challenging DOM table was visible
    When the user accesses the final row
    Then the final row contains its complete data
    And edit and delete actions are available

  @edge
  Scenario: Render the canvas with the dynamic controls
    Given the user was on the "Challenging DOM" page
    When the dynamic controls finish rendering
    Then the canvas has a positive width and height
    And the data table remains visible

  @navigation
  Scenario: Open the Challenging DOM option
    Given the user was on the the-internet homepage
    When the user opens the "Challenging DOM" option
    Then the "Challenging DOM" page is displayed
