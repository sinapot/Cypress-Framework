describe('using fixture', ()  => {

    let user1;
      beforeEach(function () {
        cy.fixture('user').then((user) => {
        user1 = user;
          //verifying json data is correct
        cy.log(user1.email)
        cy.log(user1.password)
          //calling login session custom command
        cy.login(user1.email,user1.password)
        })
      })
      
      it.skip('Add Product then checkout', () => {
        cy.visit('/');

        //add item to cart
        cy.contains('Add to cart').last().click()
        cy.get('.button-container').contains('Proceed to checkout').click()

        //your shopping cart page
        cy.get('.navigation_page').should('have.text','Your shopping cart')
        cy.get('.cart_navigation').contains('Proceed').click()

        //address page
        cy.get("textarea[name='message']").type(user1.comment)
        cy.get('.cart_navigation').contains('Proceed').click()
        
        //shipping stage
        cy.url().should('equal','http://automationpractice.com/index.php?controller=order')
        cy.get('.navigation_page').should('have.text','Shipping')
        cy.get('#cgv').check()
        cy.get('.cart_navigation').contains('Proceed').click()
        
        //payment method stage
        cy.get('.navigation_page').should('have.text','Your payment method')
        cy.get('.cheque').click()
        
        //order summary
        cy.get('.navigation_page').should('have.text','Check payment')
        cy.get('.cart_navigation').contains('confirm').click()
        
        //order success
        cy.get('.alert.alert-success').should('contain.text','Your order on My Store is complete.')
        cy.get('.logout').click()
        
      })
    })