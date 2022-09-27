const { it } = require("mocha")

describe('Job test suite', ()=>{
    it('Create Job with project', ()=>{
        cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
        cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
        cy.contains('Password').type('123456')
        cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
        cy.wait(1000)

        cy.xpath('//div[contains(text(),"PROJECTS & JOBS")]').click()
        cy.wait(1000)
        cy.xpath('//i[normalize-space()="add"]').click()
        cy.wait(1000)

        //adding job without project
        cy.contains('Job Name').type('Office Executive')
        cy.contains('Statement of Work').type('A statement of work is a document routinely employed in the field of project management. It is the narrative description of a projects work requirement.')
        cy.contains('Job Description').type('Help CEO with document management')

        //selecting start and end dates from calender 
        cy.xpath('(//i[@role="presentation"][normalize-space()="event"])[1]').click()
        cy.xpath('//span[@class="block"][normalize-space()="1"]').click()
        cy.wait(1000)
        cy.xpath('(//i[@role="presentation"][normalize-space()="event"])[2]').click()
        cy.wait(1000)
        cy.xpath('(//i[@role="img"][normalize-space()="chevron_right"])[2]').click()
        cy.wait(1000)
        cy.xpath('//span[contains(text(),"30")]').click()

        cy.contains('Save').click()
    })

    it.only('create job with project', ()=>{

        cy.wait(1000)
        cy.xpath('//div[contains(text(),"PROJECTS & JOBS")]').click()
        cy.wait(1000)
        cy.xpath('//i[normalize-space()="add"]').click()
        cy.wait(1000)

        cy.contains('Choose a Project').click()
        cy.xpath('//div[contains(text(),"Project red")]').click()

        //adding job with project
        cy.contains('Job Name').type('Sales')
        cy.contains('Statement of Work').type('A statement of work is a document routinely employed in the field of project management.')
        cy.contains('Job Description').type('Manage sales activities')

        //selecting start and end dates from calender 
        cy.xpath('(//i[@role="presentation"][normalize-space()="event"])[1]').click()
        cy.xpath('//span[@class="block"][normalize-space()="1"]').click()
        cy.wait(1000)
        cy.xpath('(//i[@role="presentation"][normalize-space()="event"])[2]').click()
        cy.wait(1000)
        cy.xpath('(//i[@role="img"][normalize-space()="chevron_right"])[2]').click()
        cy.wait(1000)
        cy.xpath('//span[contains(text(),"30")]').click()

        cy.contains('Save').click()
    })
})