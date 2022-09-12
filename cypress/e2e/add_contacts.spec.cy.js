describe('vendor Test Suit', ()=>{
    it('add Contacts 1', function(){
      cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
      cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
      cy.contains('Password').type('123456')
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(1000)

      cy.xpath('//div[normalize-space()="SETTINGS"]').click() //selecting settings
      cy.xpath('//div[contains(text(),"User Management")]').click() //selecting user management
      cy.xpath('//div[@class="q-item__label"][normalize-space()="Contacts"]').click()
      cy.wait(1000)
      cy.xpath('//i[normalize-space()="add"]').click()
         
      cy.contains('First Name *').type('Will')
      cy.contains('Last Name').type('Byers')
      cy.contains('Email').type('will@gmail.com')

      cy.contains('Address').type('Ahmed & Kazi Tower, House 57 (Old, 35 road-২, Dhaka')
      cy.xpath('//div[contains(text(),"Country")]').click({force: true})
      cy.wait(2000)
      cy.xpath('//div[contains(text(),"Bangladesh")]').click()
      cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/form[1]/label[6]/div[1]/div[1]/div[1]/input[1]').type('Dhaka')
      cy.contains('City').type('Dhanmondi')
      cy.contains('Postal Code').type('1211').should(($postalCode)=>
      {
        expect($postalCode).to.have.lengthOf(1)
      })
      cy.contains('Work Phone').type('+880416665412').should('have.lengthOf',1)
      cy.xpath('//span[contains(text(),"Create")]').click()    

    })
})