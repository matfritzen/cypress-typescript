import { ArezzoLogin } from "../../page-objects/arezzo-login.page";
import { ArezzoMyAccount } from "../../page-objects/arezzo-my-account-page";

const arezzoLogin = new ArezzoLogin();
const arezzoMyAccount = new ArezzoMyAccount();

// Nao é 
const username = 'mfritzencypresstest@gmail.com';
const password = 'Abcde@123456';


context('Login in Arezzo', () => {

    it('Type username, password and click Continuar button', () => {
        // Talvez seja melhor em before() ou beforeEach()
        cy.visit('https://www.arezzo.com.br/login')

        arezzoLogin.userField().type(username);
        arezzoLogin.passwordField().click().type(password);
        arezzoLogin.continuarButton()
            .click()
            .should('not.exist');
        
        // Testes sem assetion sao considerado anti-pattern. Estes dois testes podem ser um end-to-end
    });

    it('Assert that the icon and the text with the name of the user are visible', () => {
        
        // O que acontece aqui se o teste pra login falhar? Testes devem ser independentes.
        arezzoMyAccount.userNameLink().should('be.visible');
        arezzoMyAccount.userNameLink().should('have.text', "Olá, Matheus");

        arezzoMyAccount.userNameTitle().should('be.visible');

    });
});
