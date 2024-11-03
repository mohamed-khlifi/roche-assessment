import { Before, After } from 'cypress-cucumber-preprocessor/steps';
import {LoginPage} from "../../pages/LoginPage";

let loginPage;
Before(function () {

});

Before({ tags: "not @login" }, () => {
    loginPage = new LoginPage();
    loginPage.goToLoginPage();
    loginPage.loginWithValidCredentials();
});

After(() => {
    cy.log('Running teardown after each scenario');
});
