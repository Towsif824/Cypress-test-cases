describe('attribute suit', ()=>{
    it('add attribute', ()=>{
        cy.visit('https://app.test.pennyperfect.ca/auth')
        cy.contains('Enter your email').type('towsif.sandbox@gmail.com')//provide your user's email address
        cy.contains('Password').type('123456') //provide your user's passowrd
        cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
        cy.wait(1000)

        cy.xpath('//div[normalize-space()="CATALOG"]').click()
        cy.xpath('//div[contains(text(),"Attributes")]').click()
        cy.wait(1500)
        cy.xpath('//i[normalize-space()="add"]').click()
        cy.contains('Attribute Name').type('Size')
        cy.xpath('//div[@aria-label="Attribute is mandatory"]//div[@class="q-checkbox__bg absolute"]//*[name()="svg"]').click()
        cy.xpath('//span[contains(text(),"save")]').click()


    })

})
