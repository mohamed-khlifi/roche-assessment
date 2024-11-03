import { AbstractPage } from './AbstractPage';

const selectors = {
    usernameInput: 'input[placeholder="username"]',
    passwordInput: 'input[placeholder="password"]',
    signInButton: 'input[type="submit"]',
    errorMessage: '.error-message'
};

const validLoginCredentials = {
    username: 'testUser',
    password: 'Test@1234'
};

const invalidLoginCredentials = {
    username: 'invalidUser',
    password: 'WrongPass123'
};

export class LoginPage extends AbstractPage {
    constructor() {
        super();
    }

    loginWithValidCredentials() {
        this.type(selectors.usernameInput, validLoginCredentials.username);
        this.type(selectors.passwordInput, validLoginCredentials.password);
        this.click(selectors.signInButton);
    }

    loginWithInvalidCredentials() {
        this.type(selectors.usernameInput, invalidLoginCredentials.username);
        this.type(selectors.passwordInput, invalidLoginCredentials.password);
        this.click(selectors.signInButton);
    }

    verifyErrorMessage(expectedMessage) {
        cy.get(selectors.errorMessage).should('be.visible');
        cy.get(selectors.errorMessage).invoke('text').should('eq', expectedMessage);
    }

    goToLoginPage() {
        cy.visit('employees.html');
    }
}
