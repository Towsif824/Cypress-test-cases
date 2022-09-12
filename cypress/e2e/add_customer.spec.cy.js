describe('Customer Test Suit', ()=>{
    it('create customer', function(){

      cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
      cy.contains('Enter your email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456') //provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(1000)

      cy.xpath('//div[normalize-space()="SETTINGS"]').click() //selecting settings
      cy.xpath('//div[contains(text(),"User Management")]').click() //selecting user management
      cy.xpath('//div[@class="q-item__label"][normalize-space()="Customers"]').click()
      cy.wait(1000)
      cy.xpath('//i[normalize-space()="add"]').click()

      cy.contains('Name *').type('Will Byers')
      cy.contains('Email *').type('will@gmail.com')
      cy.contains('Web').type('Web')
      
      cy.contains('Address').type('408/1, Kuratoli')
      cy.xpath('//div[contains(text(),"Country")]').click({force: true})
      cy.wait(1000)
      cy.xpath('//div[contains(text(),"Bangladesh")]').click()
      cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/form[1]/label[6]/div[1]/div[1]/div[1]/input[1]').type('Dhaka')
      cy.contains('Province').type('Khilkhet')

      cy.contains('Postal Code').type('1221').should(($postalCode)=>
      {
        expect($postalCode).to.have.lengthOf(1)
      })
      cy.contains('Phone').type('+880188865412').should('have.lengthOf',1)
      cy.xpath('//span[contains(text(),"Create")]').click()    
     
    })

    it('create customer2', function(){
      
      cy.wait(1000)

      cy.xpath('//div[normalize-space()="SETTINGS"]').click() //selecting settings
      cy.xpath('//div[contains(text(),"User Management")]').click() //selecting user management
      cy.xpath('//div[@class="q-item__label"][normalize-space()="Customers"]').click({force: true})
      cy.xpath('//i[normalize-space()="add"]').click()

      cy.contains('Name *').type('Anika Rabea')
      cy.contains('Email *').type('anika@gmail.ca')
      cy.contains('Web').type('www.xbox.com')
      
      cy.contains('Address').type('418/2A, Kuratoli')
      cy.xpath('//div[contains(text(),"Country")]').click({force: true})
      cy.wait(1000)
      cy.xpath('//div[contains(text(),"Bangladesh")]').click()
      cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/form[1]/label[6]/div[1]/div[1]/div[1]/input[1]').type('Dhaka')
      cy.contains('Province').type('Khilkhet')

      cy.contains('Postal Code').type('1221').should(($postalCode)=>
      {
        expect($postalCode).to.have.lengthOf(1)
      })
      cy.contains('Phone').type('+880188865412').should('have.lengthOf',1)
      cy.xpath('//span[contains(text(),"Create")]').click()  
    })

    it('create customer3', function(){

      cy.wait(1000)

      cy.xpath('//div[normalize-space()="SETTINGS"]').click() //selecting settings
      cy.xpath('//div[contains(text(),"User Management")]').click() //selecting user management
      cy.xpath('//div[@class="q-item__label"][normalize-space()="Customers"]').click()
      cy.xpath('//i[normalize-space()="add"]').click()

      cy.contains('Name *').type('Abdul Rasel')
      cy.contains('Email *').type('anika@gmail.ca')
      cy.contains('Web').type('www.xbox.com')
      
      cy.contains('Address').type('418/2A Bonani')
      cy.xpath('//div[contains(text(),"Country")]').click({force: true})
      cy.wait(1000)
      cy.xpath('//div[contains(text(),"Bangladesh")]').click()
      cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/form[1]/label[6]/div[1]/div[1]/div[1]/input[1]').type('Dhaka')
      cy.contains('Province').type('Dhaka North')

      cy.contains('Postal Code').type('1221').should(($postalCode)=>
      {
        expect($postalCode).to.have.lengthOf(1)
      })
      cy.contains('Phone').type('+880188865412').should('have.lengthOf',1)
      cy.xpath('//span[contains(text(),"Create")]').click() 
    })
  })