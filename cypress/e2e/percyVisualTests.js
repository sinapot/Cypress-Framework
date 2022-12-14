/// <reference types="cypress" />


describe('using custom command and session', () => {


    before ( () => {
        //this is a custom command
        cy.login('alon@sharklasers.com','alonalon')
    })

    it('going to cart without loggin in', () => {
        //the session saved in the custom command will be saved and used by the following command
        //user no longer need to login again to go to below URL
        cy.visit('/?controller=order')
        cy.percySnapshot("going to cart")
    })

    it('going to Contacts without loggin in', () => {
        //the session saved in the custom command will be saved and used by the following command
        //user no longer need to login again to go to below URL
        cy.visit('/?controller=contact')
        cy.percySnapshot("Contacts")
    })

    it('going to Womans without loggin in', () => {
        //the session saved in the custom command will be saved and used by the following command
        //user no longer need to login again to go to below URL
        cy.visit('/id_category=3&controller=category')
        cy.percySnapshot("Womans Category")
    })
})