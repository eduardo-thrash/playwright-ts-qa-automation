@herokuapp
Feature: Broken Images

  @happy-path
  Scenario: Identify loaded and broken images
    Given the user was on the "Broken Images" page
    When all image requests finish
    Then one example image is loaded successfully
    And two example images are identified as broken

  @alternate-success
  Scenario: Display the valid image dimensions
    Given the example images finished loading
    When the user views the valid example image
    Then the image has a positive natural width
    And the image has a positive natural height

  @alternate-success
  Scenario: Expose fallback content for broken images
    Given the example images finished loading
    When the user views the broken image entries
    Then each broken image remains represented in the document
    And the page content remains visible

  @negative
  Scenario: Report a missing image resource
    Given a missing image resource was requested
    When the image response is received
    Then the resource status is 404
    And the page remains usable

  @negative
  Scenario: Prevent broken images from being treated as loaded
    Given the example images finished loading
    When the broken image entries are inspected
    Then none of the broken images has a positive natural width

  @edge
  Scenario: Preserve the expected image classification after reload
    Given the image classification was available
    When the user reloads the Broken Images page
    Then one example image is loaded successfully
    And two example images are identified as broken

  @edge
  Scenario: Complete image classification regardless of request order
    Given the user was on the "Broken Images" page
    When the image requests complete in any order
    Then every example image has a loaded or broken classification
    And three example images are classified

  @navigation
  Scenario: Open the Broken Images option
    Given the user was on the the-internet homepage
    When the user opens the "Broken Images" option
    Then the "Broken Images" page is displayed
