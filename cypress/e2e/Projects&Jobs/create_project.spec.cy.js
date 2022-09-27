describe('Project test suite', ()=>{

    it('Create new project', ()=>{
        cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
        cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
        cy.contains('Password').type('123456')
        cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
        cy.wait(1000)

        cy.xpath('//div[contains(text(),"PROJECTS & JOBS")]').click()
        cy.wait(1000)
        cy.xpath('//i[normalize-space()="add"]').click()
        cy.wait(1000)

        cy.contains('Create a project').click()
        cy.contains('Choose a Customer').click()
        cy.xpath('//div[contains(text(), "Abdul Rasel")]').click()
        cy.contains('Project Name').type('Project Abdul')

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

    it('Create project-2', ()=>{

        cy.wait(1000)
        cy.xpath('//div[contains(text(),"PROJECTS & JOBS")]').click()
        cy.wait(1000)
        cy.xpath('//i[normalize-space()="add"]').click()
        cy.wait(1000)

        cy.contains('Create a project').click()
        cy.contains('Choose a Customer').click()
        cy.xpath('//div[contains(text(), "Abdul Rasel")]').click()
        cy.contains('Project Name').type('Project red')

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

    it('create project-3', ()=>{
        
        cy.wait(1000)
        cy.xpath('//div[contains(text(),"PROJECTS & JOBS")]').click()
        cy.wait(1000)
        cy.xpath('//i[normalize-space()="add"]').click()
        cy.wait(1000)

        cy.contains('Create a project').click()
        cy.contains('Choose a Customer').click()
        cy.xpath('//div[contains(text(), "Anika Rabea")]').click()
        cy.contains('Project Name').type('Project X')

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

    it.only('create project without customer', ()=>{
        cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
        cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
        cy.contains('Password').type('123456')
        cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
        cy.wait(1000)
        cy.wait(1000)
        cy.xpath('//div[contains(text(),"PROJECTS & JOBS")]').click()
        cy.wait(1000)
        cy.xpath('//i[normalize-space()="add"]').click()
        cy.wait(1000)

        cy.contains('Create a project').click()
        cy.contains('Choose a Customer')
            .should('have.length',0)
            .then(($error) =>{
                if(!$error.length){
                    cy.log('select a customer to create a project')
                    return
                }
            })
    })
})