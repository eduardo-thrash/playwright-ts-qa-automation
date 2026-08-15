@herokuapp
Feature: Secure File Download

  @happy-path
  Scenario: Authenticate and download an available file
    Given valid secure-download credentials were available
    And at least one protected file was available
    When the user downloads the first protected file
    Then the protected download has completed
    And the downloaded file has a nonempty name

  @alternate-success
  Scenario: Download a second protected file
    Given the user was authorized for secure downloads
    And at least two protected files were available
    When the user downloads the second protected file
    Then the protected download has completed
    And its suggested name matches the selected link

  @alternate-success
  Scenario: Reload the authenticated download list
    Given the user was authorized for secure downloads
    When the user reloads the Secure File Download page
    Then the protected file list remains visible
    And the available files remain actionable

  @negative
  Scenario: Reject an invalid secure-download username
    Given an invalid username and a valid secure-download password were available
    When the user requests the protected download list
    Then access to the protected file list is denied

  @negative
  Scenario: Reject an invalid secure-download password
    Given a valid username and an invalid secure-download password were available
    When the user requests the protected download list
    Then access to the protected file list is denied

  @edge
  Scenario: Download a protected file with spaces in its name
    Given the user was authorized for secure downloads
    And a protected file with spaces in its name was available
    When the user downloads that file
    Then the download has completed
    And the suggested filename preserves the spaces

  @edge
  Scenario: Start two protected downloads in the same session
    Given the user was authorized for secure downloads
    And at least two protected files were available
    When the user downloads two different protected files
    Then two downloads have completed
    And each download has its own suggested filename

  @navigation
  Scenario: Open the Secure File Download option
    Given the user was on the the-internet homepage
    When the user opens the "Secure File Download" option
    Then the "Secure File Download" page is displayed
