/// <reference types="cypress" />


describe('using custom command and session', () => {


    before ( () => {
        //this is a custom command
        cy.login('alon@sharklasers.com','alonalon')
    })

    it.skip('going to cart without loggin in', () => {
        //the session saved in the custom command will be saved and used by the following command
        //user no longer need to login again to go to below URL
        cy.visit('/?controller=order')
        //cy.percySnapshot("Cart")
    })

    it.skip('going to Contacts without loggin in', () => {
        //the session saved in the custom command will be saved and used by the following command
        //user no longer need to login again to go to below URL
        cy.visit('/?controller=contact')
        //cy.percySnapshot("Contacts")
    })

    it.skip('going to Womans without loggin in', () => {
        //the session saved in the custom command will be saved and used by the following command
        //user no longer need to login again to go to below URL
        cy.visit('/id_category=3&controller=category')
        //cy.percySnapshot("Womans Category")
    })
})