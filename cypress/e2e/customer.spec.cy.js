describe('Customer Test Suit', ()=>{
    it('create customer', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456')// provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(17) > :nth-child(1) > :nth-child(1) > .q-item__section--main > .q-item__label').click()//selecting settings
      cy.get(':nth-child(2) > .q-expansion-item > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click()
      cy.get('[href="/customers"] > .q-item__section > .q-item__label').click()
      cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.contains('Name *').type('Bella Della')
      cy.contains('Email').type('bel@gmail.com')
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
    })

    it('create customer2', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456')// provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(17) > :nth-child(1) > :nth-child(1) > .q-item__section--main > .q-item__label').click()//selecting settings
      cy.get(':nth-child(2) > .q-expansion-item > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click()
      cy.get('[href="/customers"] > .q-item__section > .q-item__label').click()
      cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.contains('Name *').type('Max wheeler') // customer name
      cy.contains('Email').type('max@gmail.com') // customer email
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
    })

    it('create customer2', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456')// provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(17) > :nth-child(1) > :nth-child(1) > .q-item__section--main > .q-item__label').click()//selecting settings
      cy.get(':nth-child(2) > .q-expansion-item > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click()
      cy.get('[href="/customers"] > .q-item__section > .q-item__label').click()
      cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.contains('Name *').type('John Doe') // customer name
      cy.contains('Email').type('doe@gmail.com') // customer email
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
    })
  })