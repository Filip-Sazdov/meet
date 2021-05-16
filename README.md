# meet
## Meet "meet", the app that helps you meet.

### Screenshot
![image](https://user-images.githubusercontent.com/45643632/118409676-a87c6000-b659-11eb-9c26-b62970797bb5.png)

This is a serverless, progressive web application (PWA) built with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

### FEATURE 1: FILTER EVENTS BY CITY
#### User story: As a user, I should be able to “filter events by city” so that I can see the list of events that take place in that city.

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
•	Given user hasn’t searched for any city, when the user opens the app, then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
•	Given the main page is open, when user starts typing in the city textbox, then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list.
•	Given the user was typing “Berlin” in the city textbox, and the list of suggested cities is showing, when the user selects a city (e.g., “Berlin, Germany”) from the list, then their city should be changed to that city (i.e., “Berlin, Germany”), and the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
#### User story: As a user, I should be able to click an event entry so that I can access the details for that event.

Scenario 1: An event element is collapsed by default
•	Given the user hasn’t clicked on an event, when the app is initially loaded, then the user should not be able to see details for individual events, rather, they should see all events by default i.e. main page view.

Scenario 2: User can expand an event to see its details
•	Given the main page view is open, when the user selects an event, then the event details view should be visible.

Scenario 3: User can collapse an event to hide its details
•	Given the event details view is visible, when the user selects an exit button/option, then the event details view should direct to the main page view

### FEATURE 3: SPECIFY NUMBER OF EVENTS
#### User story: As a user, I should be able to access an event number filter so that I can receive a view with the specified number of events.

Scenario 1: When user hasn’t specified a number, 32 is the default number
•	Given the user hasn’t clicked on an event, when the app is initially loaded, then the user will see a list of 32 events by default.

Scenario 2: User can change the number of events they want to see
•	Given the main page view is open, when the user selects a number-of-events-visible-dropdown, then the user is presented with options to choose between the default 32, and 16, 64, 128.
 
### FEATURE 4: USE THE APP WHEN OFFLINE
#### User story: As a user, I should be able to able to use the app offline so that I can view available events even without an internet connection.

Scenario 1: Show cached data when there’s no internet connection
•	Given the user wants to work offline or has no internet connection, when the situation arises, then the user will have a local cache available with the apps data so that they can continue browsing.

Scenario 2: Show error when user changes the settings (city, time range)
•	Given no internet, when the user changes the settings (city, time range) in the app, then they will receive a notification that they are working with data from a local, cached copy of the app and are unable to load new data due to the lack of internet.

### FEATURE 5: DATA VISUALIZATION
#### User story: As a user, I should be able to access a chart showing the upcoming events in each city so that I can make a decision which one to visit.

Scenario 1: Show a chart with the number of upcoming events in each city
•	Given the user has selected a city, when the city view loads, then the user will be presented with a chart that shows how many events will take place in that city in the next week/near future.
