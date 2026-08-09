@navigation @herokuapp
Feature: Access Horizontal Slider

  Scenario: Open the Horizontal Slider option
    Given the user has opened the the-internet homepage
    When the user enters the "Horizontal Slider" option with path "/horizontal_slider"
    Then the option page with path "/horizontal_slider" is displayed

