@navigation @herokuapp
Feature: Access Digest Authentication

  Scenario: Open the Digest Authentication option
    Given the user has opened the the-internet homepage
    When the user enters the "Digest Authentication" option with path "/digest_auth"
    Then the option page with path "/digest_auth" is displayed

