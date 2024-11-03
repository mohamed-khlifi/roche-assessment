# Instructions
Before running the tests, navigate to the `ui-tests` directory and install the necessary dependencies:

```bash
cd ui-tests
npm install
```
# Feature: Login Functionality

As a user, I want to be able to log into the application using my credentials.

## Background

Given the user is on the login page

> ## Scenario 1: Successful Login
>
> **Step:** The user enters valid credentials  
> **Expected Result:** The user successfully logs in without any errors.

---

> ## Scenario 2: Unsuccessful Login
>
> **Step:** The user enters invalid credentials  
> **Expected Result:** The login attempt fails, and the application does not log the user in and an error message is displayed.

# Feature: Employee Data

As a user, I want to view and select employee data.

## Background

Given the user is on the employee data page with the data table loaded.

> ## Scenario 1: View city of origin for a selected employee
>
> **Step:** The user checks the checkbox for "Nancy Davolio"  
> **Expected Result:** The checkbox is selected.
>
> When the user clicks the "View selected data" button  
> **Expected Result:** "Nancy is from Seattle" appears in the selected data list.

---

> ## Scenario 2: Deselect an employee and verify the list is empty
>
> **Step:** the user checks the checkbox for "Nancy"  
> **Expected Result:** "Nancy is from Seattle" should be displayed.
>
> **Step:** the user unchecks the checkbox for "Nancy"  
> And clicks the "View selected data" button  
> **Expected Result:** The selected data list should be empty.

---

> ## Scenario 3: Select number of rows from pagination dropdown
>
> **Step:** the user clicks the pagination dropdown  
> **Expected Result:** The dropdown menu opens.
>
> **Step:** the user selects `5`  
> **Expected Result:** The table displays `5` rows.
