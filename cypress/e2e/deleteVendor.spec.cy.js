describe('VendorDelete Test Suit', ()=>{
    it('delete vendor', function(){

      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Enter your email').type('ih2.sandbox@gmail.com')//provide your user's email address
      cy.contains('Password').type('123456') //provide your user's passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(1000)

      cy.xpath('//div[normalize-space()="SETTINGS"]').click() //selecting settings
      cy.xpath('//div[contains(text(),"User Management")]').click() //selecting user management
      cy.xpath('//div[@class="q-item__label"][normalize-space()="Vendors"]').click()

      cy.get('.q-menu > .q-list > :nth-child(3) > .q-item__section').click() //select delete option
      cy.get('.text-red > .q-btn__wrapper > .q-btn__content > .block',{timeout: 7000}).click()
    })
})