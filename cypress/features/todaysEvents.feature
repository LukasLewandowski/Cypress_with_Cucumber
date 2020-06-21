Feature: Today's Events

    Today's Events functionality should display events only for current date

    Background: Navigate to the main page
        Given I navigate to CourseDog page

    Scenario: I should not see any events for specific date
        Given Current date is 6/16/2020
        When I click on Today's Events
        Then I should see there are no events

    Scenario: I should see that events are present for specific date
        Given Current date is 6/18/2020
        When I click on Today's Events
        Then I should see events:
            | QA Recruitment Task Start |
