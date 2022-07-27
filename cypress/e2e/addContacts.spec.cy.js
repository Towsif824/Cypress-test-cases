describe('vendor Test Suit', ()=>{
    it('add Contacts 1', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('towsif.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456')// provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(17) > :nth-child(1) > :nth-child(1) > .q-item__section--main > .q-item__label').click()//selecting settings
      cy.get(':nth-child(2) > .q-expansion-item > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click() //selecting user management
      cy.get('[href="/contacts"] > .q-item__section > .q-item__label').click()
      cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.contains('First Name *').type('Will')
      cy.contains('Last Name').type('Byers')
      cy.contains('Email').type('will@gmail.com')
      cy.xpath('//div[@placeholder="Select Country"]').click()
      cy.wait(2000)

      //cy.xpath("//span[@normalize-space()= 'Andorra']").click()
      //cy.xpath("//span[normalize-space()='Afghanistan']")
      cy.xpath('//body[1]/div[1]/div[1]/div[2]/main[1]/form[1]/label[5]/div[1]/div[1]/div[1]/div[1]/span[1]').click('center', {force: true})
      //cy.xpath("//span[contains(text(),'Afghanistan')]").click()
      cy.get('.bg-primary > .q-btn__wrapper > .q-btn__content > .block').click()
      

    })
})