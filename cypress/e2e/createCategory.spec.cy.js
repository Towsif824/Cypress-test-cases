describe('Category Test Suit', ()=>{
    it('Create Category', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456')// provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(7) > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click()//selecting CATALOG
      cy.get('[href="/categories"] > .q-item__section > .q-item__label').click() //selecting Categoris & products 
      cy.get('[href="/vendors"] > .q-item__section > .q-item__label').click()
      cy.get(':nth-child(2) > .q-item__section--side > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.get('.q-menu > .q-list > :nth-child(3) > .q-item__section').click() //select delete option
      cy.get('.text-red > .q-btn__wrapper > .q-btn__content > .block',{timeout: 7000}).click()
    })
})
