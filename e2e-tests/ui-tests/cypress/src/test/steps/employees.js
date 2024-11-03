import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { EmployeesPage } from "../../pages/EmployeesPage";

let employeesPage;

Given('the user is on the employee data page', () => {
    employeesPage = new EmployeesPage();
    employeesPage.goToEmployeesPage();
});

Given('the employee data table is loaded', () => {
    employeesPage = new EmployeesPage();
    employeesPage.verifyEmployeesTableIsLoaded();
});

Then('the employee {string} is from {string}', (employeeName, expectedCity) => {
    employeesPage.isEmployeeFromCity(employeeName, expectedCity).then(isFromCity => {
        expect(isFromCity).to.be.true;
    });
});

When('the user checks the checkbox for {string}', (employeeName) => {
    employeesPage.checkEmployeeCheckbox(employeeName);
});

Then('the user should be redirected to the employees page', (employeeName) => {
    employeesPage = new EmployeesPage();
    employeesPage.verifyEmployeesPage();
});

When('the user clicks on the "View selected data" button', () => {
    employeesPage.clickViewSelectedDataButton();
});

Then('the user should see {string} in the list of selected data', (expectedMessage) => {
    employeesPage.getSelectedData(expectedMessage);
});

Then('the list of selected data should be empty', () => {
    employeesPage.verifyListOfSelectedDataIsEmpty();
});

When('the user clicks on the pagination dropdown', () => {
    employeesPage.clickPaginationDropdown();
});

When('the user selects {int} from the options', (paginationOption) => {
    employeesPage.selectPaginationOption(paginationOption);
});

Then('the table should display {int} rows', (tableRows) => {
    employeesPage.verifyNumberOfTableRows(tableRows);
});

