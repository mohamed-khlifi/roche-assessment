Feature: Employee Data
  As a user, I want to be able to view employee data and select specific data to view

  Background:
    Given the user is on the employee data page
    And the employee data table is loaded

  Scenario: View city of origin for a single selected employee
    Then the employee "Nancy Davolio" is from "Seattle"
    When the user checks the checkbox for "Nancy"
    And the user clicks on the "View selected data" button
    Then the user should see "Nancy is from Seattle" in the list of selected data

  Scenario: Deselect an employee and verify the list is empty
    When the user checks the checkbox for "Nancy"
    And the user clicks on the "View selected data" button
    Then the user should see "Nancy is from Seattle" in the list of selected data
    When the user checks the checkbox for "Nancy"
    And the user clicks on the "View selected data" button
    Then the list of selected data should be empty

  Scenario Outline: User selects number of rows to display from pagination dropdown
    When the user clicks on the pagination dropdown
    And the user selects <rows> from the options
    Then the table should display <rows> rows
    Examples:
      | rows |
      | 5    |

