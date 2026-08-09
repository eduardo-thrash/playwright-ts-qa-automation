@navigation @herokuapp
Feature: Access WYSIWYG Editor

  Scenario: Open the WYSIWYG Editor option
    Given the user has opened the the-internet homepage
    When the user enters the "WYSIWYG Editor" option with path "/tinymce"
    Then the option page with path "/tinymce" is displayed

