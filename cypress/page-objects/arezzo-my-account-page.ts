/// <reference types="cypress" />

export class ArezzoMyAccount{


userNameLink(){
    return cy.get('.arz-header-user-firstname').first();
}

userNameTitle(){
    return cy.get('.arz-page-title').first();
}

}