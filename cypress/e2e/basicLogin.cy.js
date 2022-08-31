/// <reference types="cypress" />

describe('Automationpractice Home Page', () => {
  it('Sign in', () => {
    cy.visit('/')
    cy.contains('Sign in').click();
    cy.get('#email').type('alon@sharklasers.com');
    cy.get('#passwd').type('alonalon');
    cy.get('span').contains('Sign in').click();
    cy.get('span').contains('My account').should('be.visible');
  })
})