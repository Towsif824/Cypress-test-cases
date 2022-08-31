describe('Registration',function(){
  it('SuccessfulRegister', function(){
    cy.visit('https://app.test.pennyperfect.ca/auth')
    cy.contains('Register Now').click()
    cy.contains('First Name').type('Towsif')
    cy.contains('Last Name').type('Salauddin')
    cy.contains('Email').type('towsif.sandbox@gmail.com')
    cy.contains('Password').type('123456')
    cy.contains('Confirm Password').type('123456')
    cy.contains('Register').click()
  })

})
