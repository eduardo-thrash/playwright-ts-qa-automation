@herokuapp
Feature: Hovers

  @happy-path
  Scenario: Display the first user details
    Given the user was on the "Hovers" page
    When the user hovers over the first avatar
    Then "name: user1" is visible
    And the first profile link is visible

  @alternate-success
  Scenario: Display the second user details
    Given the user was on the "Hovers" page
    When the user hovers over the second avatar
    Then "name: user2" is visible
    And the second profile link is visible

  @alternate-success
  Scenario: Display the third user details
    Given the user was on the "Hovers" page
    When the user hovers over the third avatar
    Then "name: user3" is visible
    And the third profile link is visible

  @negative
  Scenario: Keep user details hidden without hover
    Given the user was on the "Hovers" page
    When no avatar is hovered
    Then every user caption is hidden

  @negative
  Scenario: Hide details after the pointer leaves an avatar
    Given the first user details were visible
    When the pointer leaves the first avatar
    Then the first user details are hidden

  @edge
  Scenario: Show only the currently hovered user
    Given the first user details were visible
    When the user moves the pointer to the third avatar
    Then the third user details are visible
    And the first user details are hidden

  @edge
  Scenario: Preserve one caption during repeated hover
    Given the user was on the "Hovers" page
    When the user repeatedly hovers over the same avatar
    Then one caption for that user is visible
    And no duplicate caption is created

  @navigation
  Scenario: Open the Hovers option
    Given the user was on the the-internet homepage
    When the user opens the "Hovers" option
    Then the "Hovers" page is displayed
