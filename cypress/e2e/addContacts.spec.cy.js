describe('vendor Test Suit', ()=>{
    it('add Contacts 1', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
      cy.contains('Password').type('123456')
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(1000)

      cy.xpath('//div[normalize-space()="SETTINGS"]').click() //selecting settings
      cy.xpath('//div[contains(text(),"User Management")]').click() //selecting user management
      cy.xpath('//div[@class="q-item__label"][normalize-space()="Contacts"]').click()
      cy.xpath('//i[normalize-space()="add"]').click()
         
      cy.contains('First Name *').type('Will')
      cy.contains('Last Name').type('Byers')
      cy.contains('Email').type('will@gmail.com')
      cy.xpath('//div[contains(text(),"Country")]').click({force: true})
      cy.wait(2000)
      cy.xpath('//div[contains(text(),"Bangladesh")]').click()

    })
})