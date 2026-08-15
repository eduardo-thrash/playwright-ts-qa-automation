@herokuapp
Feature: Sortable Data Tables

  @happy-path
  Scenario: Sort the second table by last name
    Given the second data table was visible
    When the user sorts by Last Name
    Then the rows are ordered as Bach, Conway, Doe, and Smith

  @alternate-success
  Scenario: Sort the second table by first name
    Given the second data table was visible
    When the user sorts by First Name
    Then the rows are ordered by first name
    And all four records remain visible

  @alternate-success
  Scenario: Sort the second table by amount due
    Given the second data table was visible
    When the user sorts by Due
    Then the rows are ordered by numeric amount
    And both 50-dollar records remain visible

  @negative
  Scenario: Expose no unsupported sortable column
    Given the sortable table headers were visible
    When the user looks for an unknown column
    Then no unknown sortable header is available
    And the documented columns remain unchanged

  @negative
  Scenario: Keep table records unchanged after an action link
    Given the second data table was visible
    When the user opens an edit action
    Then no table record is removed
    And all four records remain visible

  @edge
  Scenario: Reverse the sort order with a second header selection
    Given the second table was sorted by Last Name ascending
    When the user sorts by Last Name again
    Then the rows are ordered as Smith, Doe, Conway, and Bach

  @edge
  Scenario: Preserve duplicate due amounts while sorting
    Given the second data table was visible
    When the user sorts by Due
    Then both records owing "$50.00" remain present
    And four total records are visible

  @navigation
  Scenario: Open the Sortable Data Tables option
    Given the user was on the the-internet homepage
    When the user opens the "Sortable Data Tables" option
    Then the "Sortable Data Tables" page is displayed
