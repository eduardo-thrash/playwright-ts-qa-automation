@navigation
@herokuapp
Feature: Access Shadow DOM

  Scenario: Open the Shadow DOM option
    Given the user was on the the-internet homepage
    When the user opens the "Shadow DOM" option
    Then the "Shadow DOM" page is displayed
