/// <reference types="cypress" />

export class ArezzoMyAccount{


userNameLink(){
    return cy.get('.arz-header-user-firstname');
}

userNameTitle(){
    return cy.get('.arz-page-title');
}

}