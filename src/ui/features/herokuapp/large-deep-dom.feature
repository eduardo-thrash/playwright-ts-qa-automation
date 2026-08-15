@herokuapp
Feature: Large & Deep DOM

  @happy-path
  Scenario: Locate the deepest nested element
    Given the user was on the "Large & Deep DOM" page
    When the user accesses the deepest no-siblings element
    Then the deepest element displays "No siblings"
    And the page remains responsive

  @alternate-success
  Scenario: Locate the final table cell
    Given the large data table was visible
    When the user accesses row 50 and column 50
    Then the cell value is "50.50"

  @alternate-success
  Scenario: Display the complete large table dimensions
    Given the large data table was visible
    When the table structure is loaded
    Then fifty rows are present
    And fifty columns are present

  @negative
  Scenario: Expose no row beyond the table boundary
    Given the large data table was visible
    When the user looks for row 51
    Then no row 51 is present

  @negative
  Scenario: Expose no column beyond the table boundary
    Given the large data table was visible
    When the user looks for column 51
    Then no column 51 is present

  @edge
  Scenario: Locate the first and last table cells
    Given the large data table was visible
    When the user accesses the table boundaries
    Then the first cell value is "1.1"
    And the last cell value is "50.50"

  @edge
  Scenario: Access deep content without losing the table
    Given the large data table was visible
    When the user accesses the deepest nested content
    Then the nested content is visible
    And the complete table remains attached

  @navigation
  Scenario: Open the Large & Deep DOM option
    Given the user was on the the-internet homepage
    When the user opens the "Large & Deep DOM" option
    Then the "Large & Deep DOM" page is displayed
