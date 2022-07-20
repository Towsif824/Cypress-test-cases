describe('Registration',function(){
  it('SuccessfulRegister', function(){
    cy.visit('https://app.test.pennyperfect.ca/auth')
    cy.get(':nth-child(6) > .q-btn > .q-btn__wrapper > .q-btn__content').click()
    cy.contains('First Name').type('Imran')
    cy.contains('Last Name').type('Doe')
    cy.contains('Email').type('ih2.sandbox@gmail.com')
    cy.contains('Password').type('123456')
    cy.contains('Confirm Password').type('123456')
    cy.get('.block').click()
  })

})
