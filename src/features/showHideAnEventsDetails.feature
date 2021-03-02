Feature: Show/Hide an event's details

  Scenario: An event element is collapsed by default
    Given the user hasn’t clicked on an event
    When the app is initially loaded
    Then the user should not be able to see details for individual events, rather, they should see all events by default i.e. main page view.

  Scenario: User can expand an event to see its details
    Given the main page view is open
    When the user selects an event
    Then the event details view should be visible.

  Scenario: User can collapse an event to hide its details
    Given the event details view is visible
    When the user selects an exit button/option
    Then the event details view should direct to the main page view