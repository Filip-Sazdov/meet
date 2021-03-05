Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user hasn’t clicked on an event
    When the app is initially loaded
    Then the user will see a list of 32 events by default.

  Scenario: User can change the number of events they want to see
    Given the main page view is open
    When the user selects a number-of-events-visible-dropdown
    Then the user is presented with options to choose between the default 32, and 16, 64, 128.