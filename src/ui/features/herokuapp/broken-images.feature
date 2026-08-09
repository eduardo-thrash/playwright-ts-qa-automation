@navigation @herokuapp
Feature: Access Broken Images

  Scenario: Open the Broken Images option
    Given the user has opened the the-internet homepage
    When the user enters the "Broken Images" option with path "/broken_images"
    Then the option page with path "/broken_images" is displayed

