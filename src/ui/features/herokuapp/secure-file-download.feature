@herokuapp
Feature: Secure File Download

  @happy-path
  Scenario: Authenticate and download an available file
    Given valid secure-download credentials were available
    And at least one protected file was available
    When the user downloads the first protected file
    Then the protected download has completed
    And the protected downloaded file has a nonempty name

  @alternate-success
  Scenario: Download the last protected file
    Given the user was authorized for secure downloads
    And at least one protected file was available
    When the user downloads the last protected file
    Then the protected download has completed
    And the protected suggested name matches the selected link

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
  Scenario: Preserve the selected protected filename
    Given the user was authorized for secure downloads
    And at least one protected file was available
    When the user downloads the last protected file
    Then the protected download has completed
    And the protected suggested name matches the selected link

  @edge
  Scenario: Start two protected downloads in the same session
    Given the user was authorized for secure downloads
    And at least one protected file was available
    When the user downloads the first protected file twice
    Then two protected downloads have completed
    And each protected download has the selected suggested filename

  @navigation
  Scenario: Open the Secure File Download option
    Given the user was on the the-internet homepage
    When the user opens the "Secure File Download" option
    Then the "Secure File Download" page is displayed
