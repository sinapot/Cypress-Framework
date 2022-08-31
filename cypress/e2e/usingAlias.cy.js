/// <reference types="cypress" />

describe('using alias and url', () => {


    before ( () => {
        cy.login('alon@sharklasers.com','alonalon')
    })
    
    it('use aliases, adding it to Cart', () => {
        cy.visit('/');
        //setting alias Add to cart button 
        cy.get('.right-block').contains('Faded').as('tshirt');
        //using the alias and clicking it, then adding to Cart
        cy.get('@tshirt').click()
        cy.contains('Add to cart').click()
        cy.contains('Product successfully added to your shopping cart').should('be.visible')
        cy.url().should('include','id_product=1&controller=product')
    })
})