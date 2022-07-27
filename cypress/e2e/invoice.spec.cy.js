describe('Invoice Test Suit', ()=>{
    it.only('create invoice without tax', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('towsif.sandbox@gmail.com') //provide your email
      cy.contains('Password').type('123456') // provide your passowrd
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(3) > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click() //selecting accounting menu
      cy.get('[href="/invoices"] > .q-item__section > .q-item__label').click()
      cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(3) > .q-item__label > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.get(':nth-child(1) > .bordarColor > .text-h6').click()
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(2000)
      const value =invoiceId_alpha_numeric(6)
      cy.contains('Invoice Number').type(value)
      //function for generating random alpha_numeric invoice id
      function invoiceId_alpha_numeric(length)
      {
        let text='';
        var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;

        for(var i=0; i<length; i++)
        {
          text +=  characters.charAt(Math.floor(Math.random()* charactersLength));
        }
         return text;
      }
      
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(2000)

      //adding items
      cy.contains('Items').click()
      cy.get('.q-fab__active-icon').click()
      cy.get(':nth-child(1) > .q-btn__wrapper > .q-btn__content > .q-fab__label').click()
      cy.get('.q-page > :nth-child(1) > .q-list > :nth-child(1) > .q-item__section--main').click()
      cy.wait(1500)
      cy.get('.q-form > .q-select--single > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click() //selects Income Account field
      cy.contains('Invoice Payment').click() // selecting income account 
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()

      //for summary tab
      cy.wait(2000)
      cy.contains('Summary').click()
      cy.get('.bg-bg-white > .q-btn__wrapper > .q-btn__content > .block').click() // approve button
    })


    it('create invoice with tax', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('towsif.sandbox@gmail.com') // provide your email
      cy.contains('Password').type('123456') // provide your password
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(3) > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click() //selecting accounting menu
      cy.get('[href="/invoices"] > .q-item__section > .q-item__label').click()
      cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(3) > .q-item__label > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.get(':nth-child(1) > .bordarColor > .text-h6').click()
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(2000)
      const value =invoiceId_alpha_numeric(6)
      cy.contains('Invoice Number').type(value)

      //function for generating random alpha_numeric invoice id
      function invoiceId_alpha_numeric(length)
      {
        let text='';
        var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;

        for(var i=0; i<length; i++)
        {
          text +=  characters.charAt(Math.floor(Math.random()* charactersLength));
        }
         return text;
      }

      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(2000)

      //adding items
      cy.contains('Items').click()
      cy.get('.q-fab__active-icon').click()
      cy.get(':nth-child(1) > .q-btn__wrapper > .q-btn__content > .q-fab__label').click()
      cy.get('.q-page > :nth-child(1) > .q-list > :nth-child(1) > .q-item__section--main').click()
      cy.wait(1500)
      cy.get('.q-form > .q-select--single > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click() //selects Income Account field
      cy.contains('Invoice Payment').click() // selecting income account
      //adding tax
      cy.get('.q-select--multiple > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
      cy.contains('HST (13%)').click()
      cy.get('.q-select--multiple > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click()
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
      

      //for summary tab
      cy.wait(1000)
      cy.contains('Summary').click()
      cy.get('.bg-bg-white > .q-btn__wrapper > .q-btn__content > .block').click()
    })
  })