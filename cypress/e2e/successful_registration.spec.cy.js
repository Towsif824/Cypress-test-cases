describe('Registration',function(){
  it('SuccessfulRegister', function(){
    cy.visit('https://app.pennyperfect.ca/auth')
    cy.get(':nth-child(6) > .q-btn > .q-btn__wrapper > .q-btn__content').click()
    cy.contains('First Name').type('Towsif')
    cy.contains('Last Name').type('Salauddin')
    cy.contains('Email').type('towsif.sandbox@gmail.com')
    cy.contains('Password').type('123456')
    cy.contains('Confirm Password').type('123456')
    cy.get('.block').click()
  })

})
