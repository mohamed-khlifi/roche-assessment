import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {LoginPage} from "../../pages/LoginPage";

let loginPage;

Given(`the user is on the login page`, () => {
    loginPage = new LoginPage();
    loginPage.goToLoginPage();
});

When (`the user enters valid credentials`, () => {
    loginPage.loginWithValidCredentials();
});

When (`the user enters invalid credentials`, () => {
    loginPage.loginWithInvalidCredentials();
});

Then(`the user should see an error message`, () => {
    loginPage.verifyErrorMessage('Invalid username or password');
});
