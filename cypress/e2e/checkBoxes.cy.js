/// <reference types="cypress" />

describe('Checkboxes', () => {

    before( ()=> {
        cy.login('alon@sharklasers.com','alonalon')
    })

    it('checking checkboxes', () => {
      cy.visit('/')
      cy.contains('Women').click()

      //click dresses and assert it is added in the filter
      cy.get('#ul_layered_category_0').contains('Dresses').click()
      
      //check size Small and assert it is added i the filter
      cy.get('#uniform-layered_id_attribute_group_1').find('.checkbox').check()
      
      //click color Orange and assert it is added i the filter
      cy.get('#ul_layered_id_feature_5').contains('Cotton').click()
      cy.get('#ul_layered_id_feature_6').contains('Casual').click()
      cy.get('#ul_layered_quantity_0').find('.checkbox').check()
      cy.get('#ul_layered_manufacturer_0').find('.checkbox').check()
      cy.get('#ul_layered_condition_0').find('.checkbox').check()
      cy.percySnapshot("checkboxes")
    })
  })