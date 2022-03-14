import { GoogleSearch } from '../../page-objects/google-search.page';
const search = new GoogleSearch();

context('Google Navigation', () => {
    it('Google Search',() => {
        cy.visit('https://www.google.com');

        search.googleSearch().type('Something');
        search.googleSearchBtn().click({ force: true });
        search.searchResults().should('be.visible');
    });
});