describe('vendor Test Suit', ()=>{
    it('add vendor 1', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456')// provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(17) > :nth-child(1) > :nth-child(1) > .q-item__section--main > .q-item__label').click()//selecting settings
      cy.get(':nth-child(2) > .q-expansion-item > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click()
      cy.get('[href="/vendors"] > .q-item__section > .q-item__label').click()
      cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.contains('Name *').type('Bella Della')
      cy.contains('Email').type('bel@gmail.com')
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
    })

    it.only('add vendor 2', function(){
        cy.visit('https://app.test.pennyperfect.ca/auth')
        cy.contains('Email').type('towsif.sandbox@gmail.com')//provide your user's email address
        cy.contains('Password').type('123456')// provide your user's passowrd
        cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
        cy.get(':nth-child(17) > :nth-child(1) > :nth-child(1) > .q-item__section--main > .q-item__label').click()//selecting settings
        cy.get(':nth-child(2) > .q-expansion-item > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click()
        cy.get('[href="/vendors"] > .q-item__section > .q-item__label').click()
        cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
        cy.contains('Name *').type('Will Byers')
        cy.contains('Email').type('will@gmail.com')
        cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
      })
})