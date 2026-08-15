@herokuapp
Feature: WYSIWYG Editor

  @happy-path
  Scenario: Replace the editor content
    Given the WYSIWYG editor was ready
    When the user replaces the content with "Updated editor content"
    Then the editor contains "Updated editor content"

  @alternate-success
  Scenario: Enter multiline editor content
    Given the WYSIWYG editor was ready
    When the user enters multiple lines
    Then every entered line is present in the editor

  @alternate-success
  Scenario: Apply bold formatting to editor text
    Given text was selected in the WYSIWYG editor
    When the user applies bold formatting
    Then the selected text is bold
    And the text content remains unchanged

  @negative
  Scenario: Keep outside input from changing editor content
    Given the WYSIWYG editor contained its initial text
    When the user types outside the editor frame
    Then the editor content remains unchanged

  @negative
  Scenario: Expose no unsupported toolbar action
    Given the WYSIWYG editor toolbar was visible
    When the user looks for an unsupported toolbar action
    Then no unsupported toolbar action is available
    And the editor remains usable

  @edge
  Scenario: Enter Unicode content
    Given the WYSIWYG editor was ready
    When the user enters Unicode text
    Then the complete Unicode text is present in the editor

  @edge
  Scenario: Enter a long content block
    Given the WYSIWYG editor was ready
    When the user enters a long content block
    Then the complete content is retained
    And the editor remains responsive

  @navigation
  Scenario: Open the WYSIWYG Editor option
    Given the user was on the the-internet homepage
    When the user opens the "WYSIWYG Editor" option
    Then the "WYSIWYG Editor" page is displayed
