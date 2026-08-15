@herokuapp
Feature: File Upload

  @happy-path
  Scenario: Upload a text file
    Given a valid text file was available
    When the user uploads the text file
    Then the file has been uploaded successfully
    And the uploaded filename is displayed

  @alternate-success
  Scenario: Upload a JSON file
    Given a valid JSON file was available
    When the user uploads the JSON file
    Then the file has been uploaded successfully
    And the uploaded filename is displayed

  @alternate-success
  Scenario: Upload an image file
    Given a valid image file was available
    When the user uploads the image file
    Then the file has been uploaded successfully
    And the uploaded filename is displayed

  @negative
  Scenario: Submit without selecting a file
    Given no upload file was selected
    When the user submits the upload form
    Then no uploaded filename is displayed
    And no successful upload confirmation is shown

  @negative
  Scenario: Reject a missing local file
    Given the selected local file did not exist
    When the user attempts to attach the file
    Then no file is selected for upload
    And the upload form remains available

  @edge
  Scenario: Upload an empty file
    Given an empty file was available
    When the user uploads the empty file
    Then the file has been uploaded successfully
    And the uploaded filename is displayed

  @edge
  Scenario: Upload a file with a Unicode name
    Given a valid file with a Unicode name was available
    When the user uploads the file
    Then the file has been uploaded successfully
    And the Unicode filename is displayed

  @navigation
  Scenario: Open the File Upload option
    Given the user was on the the-internet homepage
    When the user opens the "File Upload" option
    Then the "File Upload" page is displayed
