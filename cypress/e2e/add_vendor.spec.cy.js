describe('vendor Test Suit', ()=>{
    it('add vendor 1', function(){

      cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
      cy.contains('Enter your email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456') //provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(1000)

      cy.xpath('//div[normalize-space()="SETTINGS"]').click() //selecting settings
      cy.xpath('//div[contains(text(),"User Management")]').click() //selecting user management
      cy.contains('Vendors').click()
      cy.wait(1000)
      cy.xpath('//i[normalize-space()="add"]').click()

      cy.contains('Name *').type('Bella Della')
      cy.contains('Email *').type('bel@gmail.com')
      
      cy.contains('Address').type('CWS (C)-10, Bir Uttam A K Khandakar Road, Gulshan-01')
      cy.xpath('//div[contains(text(),"Country")]').click({force: true})
      cy.wait(1000)
      cy.xpath('//div[contains(text(),"Bangladesh")]').click()
      cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/form[1]/label[6]/div[1]/div[1]/div[1]/input[1]').type('Dhaka')
      cy.contains('City').type('Dhaka north')

      cy.contains('Postal Code').type('1212').should(($postalCode)=>
      {
        expect($postalCode).to.have.lengthOf(1)
      })
      cy.contains('Phone').type('+880196665412').should('have.lengthOf',1)
      cy.xpath('//span[contains(text(),"Create")]').click()    
    })

    it('add vendor 2', function(){

      cy.wait(1000)

      cy.xpath('//div[normalize-space()="SETTINGS"]').click() //selecting settings
      cy.xpath('//div[contains(text(),"User Management")]').click() //selecting user management
      cy.xpath('//div[@class="q-item__label"][normalize-space()="Vendors"]').click({force: true})
      cy.xpath('//i[normalize-space()="add"]').click()

      cy.contains('Name *').type('Sam Wick')
      cy.contains('Email *').type('sam@gmail.com')
      
      cy.contains('Address').type('CWS (C)-10, Bir Uttam A K Khandakar Road, Gulshan-01')
      cy.xpath('//div[contains(text(),"Country")]').click({force: true})
      cy.wait(1000)
      cy.xpath('//div[contains(text(),"Bangladesh")]').click()
      cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/form[1]/label[6]/div[1]/div[1]/div[1]/input[1]').type('Dhaka')
      cy.contains('City').type('Dhaka north')

      cy.contains('Postal Code').type('1212').should(($postalCode)=>
      {
        expect($postalCode).to.have.lengthOf(1)
      })
      cy.contains('Phone').type('+880196665412').should('have.lengthOf',1)
      cy.xpath('//span[contains(text(),"Create")]').click()    
      })
})