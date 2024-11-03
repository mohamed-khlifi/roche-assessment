import { AbstractPage } from './AbstractPage';

const selectors = {
    employeesPageHeader: '#button',
    treeGrid: '#treeGrid',
    selectedDataList: '#listBoxContentlistBoxSelected',
    viewSelectedDataButton: '#btn',
    employeesTable: '#treeGrid',
    paginationDropdown: '#gridpagerlistbottomtreeGrid',
    paginationOptions: '[id^="listitem"]'

};

export class EmployeesPage extends AbstractPage {
    constructor() {
        super();
    }

    goToEmployeesPage() {
        cy.visit('employees.html');
        this.verifyEmployeesPage();
    }

    verifyEmployeesPage() {
        this.isVisible(selectors.employeesPageHeader);
    }

    verifyEmployeesTableIsLoaded() {
        this.isVisible(selectors.employeesTable);
    }

    getEmployeeData() {
        return cy.get(selectors.treeGrid, { timeout: this._timeout }).then(($grid) => {
            expect($grid.jqxTreeGrid).to.be.a('function');
            return $grid.jqxTreeGrid('source')._source.localData;
        });
    }

    isEmployeeFromCity(employeeName, expectedCity) {
        return this.getEmployeeData().then((employees) => {
            const employee = employees.find(emp => `${emp.FirstName} ${emp.LastName}` === employeeName);
            return employee ? employee.City === expectedCity : false;
        });
    }

    checkEmployeeCheckbox(employeeName) {
        cy.contains('#treeGrid .jqx-grid-cell', employeeName)
            .should('be.visible')
            .within(() => {
                cy.get('.jqx-tree-grid-checkbox').click();
            });
    }

    clickViewSelectedDataButton() {
        cy.get(selectors.viewSelectedDataButton).click();
    }

    getSelectedData(expectedText) {
        cy.get(selectors.selectedDataList)
            .should('be.visible')
            .and('contain.text', expectedText);
    }

    verifyListOfSelectedDataIsEmpty() {
        cy.get(selectors.selectedDataList)
            .should('be.visible')
            .and('be.empty');
    }

    clickPaginationDropdown() {
        this.click(selectors.paginationDropdown);
    }

    selectPaginationOption(option) {
        cy.get(selectors.paginationOptions).contains(option).click();
    }

    verifyNumberOfTableRows(expectedRows) {
        cy.get('#treeGrid').find('tr[role="row"]').should('have.length', expectedRows);
    }
}
