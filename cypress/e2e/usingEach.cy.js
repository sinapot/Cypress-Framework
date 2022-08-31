describe('using fixture', () => {

  let user1;
  beforeEach(function () {
    cy.fixture('user').then((user) => {
      user1 = user;
      //verifying json data is correct
      cy.log(user1.email)
      cy.log(user1.password)
      //calling login session custom command
      cy.login(user1.email, user1.password)
    })
  })

  it('Add Product then checkout', () => {
    cy.visit('/')

    //using each to iterate through a list and select the desired element
    cy.get('#homefeatured li .right-block h5 a').each(($el, index, $li) => {
      const text = $el.text()
      if (text.includes("Blouse")) {
        cy.get('#homefeatured li .right-block div a:nth-child(1)').eq(index).click()
      }
    })

  })

})