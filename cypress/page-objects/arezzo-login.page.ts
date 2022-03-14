/// <reference types="cypress" />

export class ArezzoLogin{

userField(){
    return cy.get('input[name="j_username"]').first();
}

passwordField(){
    return cy.get('input[name="j_password"]').first();
}

continuarButton(){
    return cy.get('#submit-login-btn').first();
}

}