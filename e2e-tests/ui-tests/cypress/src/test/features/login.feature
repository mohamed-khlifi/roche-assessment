Feature: Login Functionality
  As a user, I want to be able to log into the application using my credentials.


  Background:
    Given the user is on the login page

  @login
  Scenario: Successful Login
    When the user enters valid credentials
    Then the user should be redirected to the employees page

  @login
  Scenario: Unsuccessful Login
    When the user enters invalid credentials
    Then the user should see an error message
