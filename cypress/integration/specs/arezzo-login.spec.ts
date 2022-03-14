import { ArezzoLogin } from "../../page-objects/arezzo-login.page";
import { ArezzoMyAccount } from "../../page-objects/arezzo-my-account-page";

const arezzoLogin = new ArezzoLogin();
const arezzoMyAccount = new ArezzoMyAccount();

const username = 'mfritzencypresstest@gmail.com';
const password = 'Abcde@123456';


context('Login in Arezzo', () => {

    it('Type username, password and click Continuar button', () => {
        cy.visit('https://www.arezzo.com.br/login')

        arezzoLogin.userField().type(username);
        arezzoLogin.passwordField().click().type(password);
        arezzoLogin.continuarButton().click();

    });

    it('Assert that the icon and the text with the name of the user are visible', () => {

        arezzoMyAccount.userNameLink().should('be.visible');
        arezzoMyAccount.userNameLink().should('have.text', "Olá, Matheus");

        arezzoMyAccount.userNameTitle().should('be.visible');

    });
});