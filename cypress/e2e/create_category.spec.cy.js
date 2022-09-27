describe('Category Test Suit', ()=>{
    it('view Categories', function(){
      cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
      cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
      cy.contains('Password').type('123456')
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(1000)

      cy.xpath('//div[normalize-space()="CATALOG"]').click()//selecting CATALOG
      cy.xpath('//div[contains(text(),"Categories & Products")]').click() //selecting Categoris & products 
    })

    it('Create Category', function(){
      cy.wait(1000)
      cy.xpath('//i[normalize-space()="add"]').click({force: true})
      cy.contains('Name').type('Laptop')
      cy.xpath('//span[contains(text(),"save")]').click()
    })

    it('Create Category', function(){
      cy.wait(1000)
      cy.xpath('//i[normalize-space()="add"]').click({force: true})
      cy.contains('Name').type('Mobile')
      cy.xpath('//span[contains(text(),"save")]').click()
    })
})