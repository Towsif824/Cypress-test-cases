describe('Registration',function(){
  it('SuccessfulRegister', function(){
    cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
    cy.contains('Register Now').click()
    cy.contains('First Name').type('Towsif')
    cy.contains('Last Name').type('Salauddin')
    cy.contains('Email').type('towsif.sandbox@gmail.com')
    cy.contains('Password').type('123456')
    cy.contains('Confirm Password').type('123456')
    cy.contains('Register').click()
    cy.wait(2000)
  })

  it('registration without providing all the mandatory inputs', ()=>{
    cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
    cy.contains('Register Now').click()
    cy.contains('First Name').type('Towsif')
    cy.contains('Last Name').type('Salauddin')
    //cy.contains('Email').type('towsif.sandbox+1@gmail.com')
    cy.contains('Password').type('123456')
    cy.contains('Confirm Password').type('123456')
    cy.contains('Register').click()

    cy.url().should('include', '/register')
  })

})
