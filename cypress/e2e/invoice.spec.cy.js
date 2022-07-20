describe('Invoice Test Suit', ()=>{
    it.only('create invoice', function(){
      cy.visit('https://app.test.pennyperfect.ca/auth')
      cy.contains('Email').type('ih2.sandbox@gmail.com')
      cy.contains('Password').type('123456')
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(3) > .q-expansion-item__container > div.q-item > .q-item__section--main > .q-item__label').click() //selecting accounting menu
      cy.get('[href="/invoices"] > .q-item__section > .q-item__label').click()
      cy.get('.q-page-sticky > div > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.get(':nth-child(3) > .q-item__label > .q-btn > .q-btn__wrapper > .q-btn__content > .material-icons').click()
      cy.get(':nth-child(1) > .bordarColor > .text-h6').click()
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(3000)
      const value =invoiceId_alpha_numeric(5)
      cy.contains('Invoice Number').type(value)
      cy.get('.q-btn--standard > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(5000)
      cy.contains('Items').click()
      cy.get('.q-fab__active-icon').click()
      cy.get(':nth-child(1) > .q-btn__wrapper > .q-btn__content > .q-fab__label').click()
      cy.get('.q-page > :nth-child(1) > .q-list > :nth-child(1) > .q-item__section--main').click()
     
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
      

      
    })
  })