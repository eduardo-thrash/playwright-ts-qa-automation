@herokuapp
Feature: File Download

  @happy-path
  Scenario: Download an available file
    Given at least one downloadable file was available
    When the user downloads the first available file
    Then the download has completed
    And the downloaded file has a nonempty name

  @alternate-success
  Scenario: Download another available file
    Given at least two downloadable files were available
    When the user downloads the second available file
    Then the download has completed
    And the downloaded file has a nonempty name

  @alternate-success
  Scenario: Preserve the downloaded file content
    Given a downloadable text file was available
    When the user downloads the text file
    Then the downloaded file is not empty
    And its suggested name matches the selected link

  @negative
  Scenario: Return not found for a missing download
    Given a nonexistent download path was available
    When the user requests the missing file
    Then the download response status is 404
    And no successful download is produced

  @negative
  Scenario: Prevent page chrome from being treated as a download
    Given the user was on the "File Download" page
    When the page content is displayed without selecting a file
    Then no download is started

  @edge
  Scenario: Download a file with spaces in its name
    Given a downloadable file with spaces in its name was available
    When the user downloads that file
    Then the download has completed
    And the suggested filename preserves the spaces

  @edge
  Scenario: Start two independent downloads
    Given at least two downloadable files were available
    When the user downloads two different files
    Then two downloads have completed
    And each download has its own suggested filename

  @navigation
  Scenario: Open the File Download option
    Given the user was on the the-internet homepage
    When the user opens the "File Download" option
    Then the "File Download" page is displayed
