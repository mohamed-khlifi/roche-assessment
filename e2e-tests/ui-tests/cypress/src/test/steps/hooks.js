import { Before, After } from 'cypress-cucumber-preprocessor/steps';
import {LoginPage} from "../../pages/LoginPage";

let loginPage;

Before({ tags: "not @login" }, () => {
    loginPage = new LoginPage();
    loginPage.goToLoginPage();
    loginPage.loginWithValidCredentials();
});