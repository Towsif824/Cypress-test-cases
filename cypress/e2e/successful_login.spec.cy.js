describe('Login Test Suit', ()=>{
  it.only('Login', function(){
    cy.visit('https://app.test.pennyperfect.ca/auth')
    cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
    cy.contains('Password').type('123456')
    cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()

    cy.get('.text-uppercase').invoke('text').then((text)=>{
      expect(text).to.eq('Dashboard')
    })

    cy.url().should('include', '/dashboard')
  })
})


