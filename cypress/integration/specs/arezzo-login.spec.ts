import { data } from "cypress/types/jquery";
import { ArezzoLogin } from "../../page-objects/arezzo-login.page";
import { ArezzoMyAccount } from "../../page-objects/arezzo-my-account-page";

const arezzoLogin = new ArezzoLogin();
const arezzoMyAccount = new ArezzoMyAccount();

context('Login in Arezzo', () => {

    before( function (){
        cy.visit('https://www.arezzo.com.br/login')
        
        cy.fixture('login').then((data) => {
            this.data = data;
        })

    })

    it('Login with a valid User', function () {

        arezzoLogin.userField().type(this.data.username);
        arezzoLogin.passwordField().click().type(this.data.passw);
        arezzoLogin.continuarButton().click();

        arezzoLogin.continuarButton()
        .click()
        .should('not.exist')

        arezzoMyAccount.userNameLink().should('be.visible');
        arezzoMyAccount.userNameLink().should('have.text', "Olá, Matheus");

        arezzoMyAccount.userNameTitle().should('be.visible');

    });

});