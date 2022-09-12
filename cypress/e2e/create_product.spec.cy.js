describe('Category Test Suit', ()=>{
    it('view Categories', function(){
      cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
      cy.contains('Email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456')// provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(7) > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click()//selecting CATALOG
      cy.get('[href="/categories"] > .q-item__section > .q-item__label').click() //selecting Categoris & products 
    })

    it('Create Category', function(){
      cy.xpath('//i[normalize-space()="add"]').click()
      cy.contains('Name').type('Test')
      cy.xpath('//span[contains(text(),"Create")]').click()
    })
})