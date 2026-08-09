@navigation
@herokuapp
Feature: Access WYSIWYG Editor

  Scenario: Open the WYSIWYG Editor option
    Given the user was on the the-internet homepage
    When the user opens the "WYSIWYG Editor" option
    Then the "WYSIWYG Editor" page is displayed
