@navigation
@herokuapp
Feature: Access Secure File Download

  Scenario: Open the Secure File Download option
    Given the user was on the the-internet homepage
    When the user opens the "Secure File Download" option
    Then the "Secure File Download" page is displayed
