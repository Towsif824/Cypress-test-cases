describe('Login Test Suit', ()=>{
  it('Login', function(){
    cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
    cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
    cy.contains('Password').type('123456')
    cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()

    /*cy.get('.text-uppercase').invoke('text').then((text)=>{
      expect(text).to.eq('Dashboard')
    })*/

    cy.url().should('include', '/dashboard')
  })

  it('login with invalid email', function(){
    cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
    cy.contains('Enter your email').type('towsif.sanbox@gmail.com')
    cy.contains('Password').type('123456')
    cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
    
    cy.xpath('//div[@class="q-dialog__message q-card__section q-card__section--vert"]').invoke('text').then((text)=>{
      expect(text).to.eq('Either email or password is incorrect.')
    })
  })

  it('login with invalid password', function(){
    cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
    cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
    cy.contains('Password').type('145996')
    cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
    
    cy.xpath('//div[@class="q-dialog__message q-card__section q-card__section--vert"]').invoke('text').then((text)=>{
      expect(text).to.eq('Either email or password is incorrect.')
    })
  })

  it('login with invalid creds', function(){
    cy.visit('https://app.test.pennyperfect.ca/auth')
    cy.contains('Enter your email').type('towsif.sanbox@gmail.com')
    cy.contains('Password').type('145996')
    cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
    
    cy.xpath('//div[@class="q-dialog__message q-card__section q-card__section--vert"]').invoke('text').then((text)=>{
      expect(text).to.eq('Either email or password is incorrect.')
    })
  })

})