/// <reference types="cypress" />

describe('using alias and url', () => {

    before ('test setup adding product to Cart first', () => {
        cy.login('alon@sharklasers.com','alonalon')

    })
    
    it('using triger to Mouse over Cart button', () => {
        cy.visit('/');
        cy.contains('Add to cart').eq(0).click()
        //use mouseover on already visible text to display dropdown
        //cy.get("span[title='Close window']").click()
        //cy.contains('Cart').trigger('mouseover')

    })

    it('using invoke to Mouse over Cart button', () => {
        cy.visit('/');
        //use invoke to show hidden class
        cy.get('.cart_block').invoke('show')
        cy.contains('Check out').click()
    })
})