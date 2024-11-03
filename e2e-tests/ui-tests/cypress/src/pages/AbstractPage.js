export class AbstractPage {

constructor() {
    this._timeout = Cypress.config('timeout') ?? 0;
}
    navigate(url) {
        cy.visit(url);
    }

    isVisible(selector) {
        return cy.get(selector).should('be.visible');
    }

    isNotVisible(selector) {
        return cy.get(selector).should('not.be.visible');
    }

    click(selector) {
        return cy.get(selector).click();
    }

    type(selector, text) {
        return cy.get(selector).type(text);
    }

    getText(selector) {
        return cy.get(selector).invoke('text');
    }
}

