describe('Delete Bill test cases', function(){
    it('delete draft bills', ()=>{
        cy.visit('https://app.test.pennyperfect.ca/auth')
        cy.contains('Enter your email').type('towsif.sandbox@gmail.com')//provide your user's email address
        cy.contains('Password').type('123456') //provide your user's passowrd
        cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
        cy.wait(1000)

        //selecting accounting in nav menu
        cy.xpath('//div[normalize-space()="ACCOUNTING"]').click()
        cy.contains('Bills').click()
        cy.wait(1000)

        cy.xpath('(//i[@role="img"][normalize-space()="more_vert"])[2]').click()
        cy.xpath('//div[contains(text(),"Delete")]').click()
        cy.xpath('//span[contains(text(),"DELETE")]').click()
    })
})