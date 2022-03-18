/// <reference types="cypress" />

export class ArezzoLogin{

userField(){
    return cy.get('input[name="j_username"]');
}

passwordField(){
    return cy.get('input[name="j_password"]');
}

continuarButton(){
    return cy.get('#submit-login-btn');
}

closePopUpButton(){
    return cy.get('div[style="position: absolute; inset: 0px; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px inset;"]', {timeout : 15000});
}
}