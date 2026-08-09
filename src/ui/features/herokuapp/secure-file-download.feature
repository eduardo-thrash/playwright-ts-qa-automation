@navigation @herokuapp
Feature: Access Secure File Download

  Scenario: Open the Secure File Download option
    Given the user has opened the the-internet homepage
    When the user enters the "Secure File Download" option with path "/download_secure"
    Then the option page with path "/download_secure" is displayed

