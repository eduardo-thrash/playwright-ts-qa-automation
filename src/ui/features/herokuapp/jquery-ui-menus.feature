@herokuapp
Feature: JQuery UI Menus

  @happy-path
  Scenario: Download the CSV option
    Given the Enabled menu was expanded
    When the user opens Downloads and selects CSV
    Then a CSV download is started
    And the downloaded filename has a CSV extension

  @alternate-success
  Scenario: Download the PDF option
    Given the Enabled menu was expanded
    When the user opens Downloads and selects PDF
    Then a PDF download is started
    And the downloaded filename has a PDF extension

  @alternate-success
  Scenario: Download the Excel option
    Given the Enabled menu was expanded
    When the user opens Downloads and selects Excel
    Then an Excel download is started
    And the downloaded filename has a spreadsheet extension

  @negative
  Scenario: Prevent interaction with the Disabled menu
    Given the user was on the "JQuery UI Menus" page
    When the user hovers over Disabled
    Then no actionable disabled submenu is displayed
    And no JQuery menu download is started

  @negative
  Scenario: Keep Downloads unavailable before Enabled is expanded
    Given the Enabled menu was collapsed
    When the user views the menu
    Then the Downloads submenu is not actionable
    And no download option is visible

  @edge
  Scenario: Hide submenus after the pointer leaves the menu
    Given the Downloads submenu was visible
    When the pointer leaves the menu
    Then the Downloads submenu is hidden

  @edge
  Scenario: Reopen the menu after it was collapsed
    Given the Downloads submenu was hidden
    When the user expands Enabled and Downloads again
    Then PDF, CSV, and Excel are visible
    And every download option is actionable

  @navigation
  Scenario: Open the JQuery UI Menus option
    Given the user was on the the-internet homepage
    When the user opens the "JQuery UI Menus" option
    Then the "JQuery UI Menus" page is displayed
