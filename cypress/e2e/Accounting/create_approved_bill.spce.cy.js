describe('Draft bills test suit', ()=>{
    
    //function for generating random alpha_numeric invoice id
    function billId_alpha_numeric(length){
        let text='';
        var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for(var i=0; i<length; i++)
            {
                text +=  characters.charAt(Math.floor(Math.random()* charactersLength));
            }
        return text;
    }
    
    it('Test case: create approved bills with tax', function(){

        cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
        cy.contains('Enter your email').type('towsif.sandbox@gmail.com')//provide your user's email address
        cy.contains('Password').type('123456') //provide your user's passowrd
        cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
        cy.wait(1000)

        //selecting accounting in nav menu
        cy.xpath('//div[normalize-space()="ACCOUNTING"]').click()
        cy.contains('Bills').click()
        cy.wait(1000)

        cy.xpath('//i[normalize-space()="add"]').click()
        cy.wait(1000)
        cy.xpath('(//i[@role="img"][normalize-space()="add"])[1]').click() //adding customer
        cy.wait(1500)
        cy.xpath('//span[contains(text(),"Manage Vendor From List")]').click() //selecting vendor list
        cy.contains('Bella Della').click() //selecting vendor
  
        const value =billId_alpha_numeric(6)
        cy.contains('Bill Number').type(value)
        
        cy.xpath('//span[contains(text(),"Save")]').click()
        cy.wait(2000)

        //adding items
        cy.xpath('//i[normalize-space()="close"]').click({ multiple: true } )
        cy.wait(1000)
        cy.xpath('//div[normalize-space()="Inventory"]').click({force: true}) //selecting inventory
        cy.wait(1000)
        cy.xpath('//div[normalize-space()="RAZER KRAKEN V2 GREEN EDITION-ANALOG GAMING HEADSET"]').click()
        cy.wait(2000)

        //adding tax
        cy.xpath('//div[contains(text(),"Taxes")]').click({force: true})
        cy.wait(2000)
        cy.xpath('//div[contains(text(),"HST (13%)")]').click()

        cy.contains('Expense Account *').click({force: true})
        cy.wait(4000)
        cy.xpath('//div[contains(text(),"Computer - Hardware")]').click()

        cy.xpath('//span[contains(text(),"Add Item")]').click()

        cy.xpath('//span[contains(text(),"APPROVE DRAFT")]').click() // approving draft
    })

    it('Test case: create approved bills with tax', function(){

        cy.wait(2000)
        //selecting accounting in nav menu
        cy.xpath('//div[normalize-space()="ACCOUNTING"]').click()
        cy.contains('Bills').click()
        cy.wait(1000)

        cy.xpath('//i[normalize-space()="add"]').click()
        cy.wait(1000)
        cy.xpath('(//i[@role="img"][normalize-space()="add"])[1]').click() //adding customer
        cy.wait(1500)
        cy.xpath('//span[contains(text(),"Manage Vendor From List")]').click() //selecting vendor list
        cy.contains('Bella Della').click() //selecting vendor
  
        const value =billId_alpha_numeric(6)
        cy.contains('Bill Number').type(value)
        
        cy.xpath('//span[contains(text(),"Save")]').click()
        cy.wait(2000)

        //adding items
        cy.xpath('//i[normalize-space()="close"]').click({ multiple: true } )
        cy.wait(1000)
        cy.xpath('//div[normalize-space()="Inventory"]').click({force: true}) //selecting inventory
        cy.wait(1000)
        cy.xpath('//div[normalize-space()="RAZER KRAKEN V2 GREEN EDITION-ANALOG GAMING HEADSET"]').click()
        cy.wait(2000)

        cy.contains('Expense Account *').click({force: true})
        cy.wait(4000)
        cy.xpath('//div[contains(text(),"Computer - Hardware")]').click()

        cy.xpath('//span[contains(text(),"Add Item")]').click()

        cy.xpath('//span[contains(text(),"APPROVE DRAFT")]').click() //approving draft
    })

})