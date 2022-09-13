describe('Invoice Test Suit', ()=>{

  //function for generating random alpha_numeric invoice id
  function invoiceId_alpha_numeric(length){
        let text='';
        var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for(var i=0; i<length; i++)
        {
          text +=  characters.charAt(Math.floor(Math.random()* charactersLength));
        }
         return text;
      }
    it('create invoice tax', function(){
      cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
      cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
      cy.contains('Password').type('123456')
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(1000)

      //selecting accounting in nav menu
      cy.xpath('//div[normalize-space()="ACCOUNTING"]').click()
      cy.contains('Invoices').click()
      cy.wait(1000)

      cy.xpath('//i[normalize-space()="add"]').click()
      cy.wait(1000)
      cy.xpath('(//i[@role="img"][normalize-space()="add"])[1]').click() //adding customer
      cy.wait(1500)
      cy.xpath('//span[contains(text(),"Manage Customer From List")]').click() //selecting customer list
      cy.contains('Abdul Rasel').click() //selecting customer

      const value =invoiceId_alpha_numeric(6)
      cy.contains('Invoice Number').type(value)
      
      cy.xpath('//span[contains(text(),"Save")]').click()
      cy.wait(2000)

      //adding items
      cy.xpath('//i[normalize-space()="close"]').click({ multiple: true } )
      cy.wait(1000)
      cy.xpath('//div[normalize-space()="Inventory"]').click({force: true}) //selecting inventory
      cy.wait(1000)
      cy.xpath('//div[normalize-space()="RAZER KRAKEN V2 GREEN EDITION-ANALOG GAMING HEADSET"]').click()
      cy.wait(4000)
      cy.contains('Income Account').click({force: true})
      
      cy.wait(2000)
      cy.xpath('//div[contains(text(),"Sales")]').click()
      //adding tax
      cy.xpath('//div[contains(text(),"Taxes")]').click({force: true})
      cy.xpath('//div[contains(text(),"HST (13%)")]').click()

      cy.xpath('//span[contains(text(),"Add Item")]').click()
    })

    it('create invoice without tax', function(){

      cy.wait(2000)

      //selecting accounting in nav menu
      cy.xpath('//div[normalize-space()="ACCOUNTING"]').click()
      cy.contains('Invoices').click()
      cy.wait(1000)

      cy.xpath('//i[normalize-space()="add"]').click()
      cy.wait(1000)
      cy.xpath('(//i[@role="img"][normalize-space()="add"])[1]').click() //adding customer
      cy.wait(1500)
      cy.xpath('//span[contains(text(),"Manage Customer From List")]').click() //selecting customer list
      cy.contains('Anika Rabea').click() //selecting customer

      const value =invoiceId_alpha_numeric(6)
      cy.contains('Invoice Number').type(value)
      
      cy.xpath('//span[contains(text(),"Save")]').click()
      cy.wait(2000)

      //adding items
      cy.xpath('//i[normalize-space()="close"]').click({ multiple: true } )
      cy.wait(1000)
      cy.xpath('//div[normalize-space()="Inventory"]').click({force: true}) //selecting inventory
      cy.wait(1000)
      cy.xpath('//div[normalize-space()="RAZER KRAKEN V2 GREEN EDITION-ANALOG GAMING HEADSET"]').click()
      cy.wait(4000)
      cy.contains('Income Account').click({force: true})
      
      cy.wait(2000)
      cy.xpath('//div[contains(text(),"Sales")]').click()
      //adding tax

      cy.xpath('//span[contains(text(),"Add Item")]').click()
    })



  })