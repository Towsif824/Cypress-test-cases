describe('Product Test Suit', ()=>{
    it('view Products', function(){
      cy.visit(`${Cypress.env('pennyperfect_baseurl')}`)
      cy.contains('Enter your email').type('towsif.sandbox@gmail.com')
      cy.contains('Password').type('123456')
      cy.get('.q-form > .q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      cy.wait(3000)
      
    })

    it('Create product-1', function(){

      cy.xpath('//div[normalize-space()="CATALOG"]').click()//selecting CATALOG
      cy.xpath('//div[contains(text(),"Categories & Products")]').click() //selecting Categoris & products
      cy.xpath('(//span[@class="text-bold"])[1]').click() // select 1st category of the list
      cy.xpath('//a[@role="button"]//span[@class="q-btn__wrapper col row q-anchor--skip"]').click( )
      cy.xpath('//i[normalize-space()="inventory"]').click()

      //filling the form
      cy.contains('Title').type('LOGITECH B175 WIRELESS MOUSE')
      cy.contains('Sub Title').type('WIRELESS MOUSE')
      cy.contains('Unit of Measurement').type('Pcs')
      cy.contains('Quantity').type('1')
      cy.contains('Price').type('700')
      cy.contains('Description')
      .type('The Wireless Mouse Is Very Durable And It Is Simple To Use. The Mouse Is Basically Plug And Play. If The Mouse Is Used Properly The Life-Span Of It Is More Then 4 Years. This Mouse An All Purpose Mouse. It Has Advanced Wireless Connectivity. It Supports Most Of The Laptops And Desktops. The Mouse Is Very Easy To Carry And Can Be Taken Anywhere.')
      cy.contains('Slug').type('Mouse')
      cy.contains('SEO Title').type('Mouse')
      cy.contains('SEO Title').type('Wireless')
      cy.contains('Position').type('1')
      cy.xpath('//span[contains(text(),"save")]').click()
      
    })

    it('Create product-2', function(){

      cy.xpath('//div[normalize-space()="CATALOG"]').click()//selecting CATALOG
      cy.wait(1000)
      cy.xpath('//div[contains(text(),"Categories & Products")]').click({force: true}) //selecting Categoris & products
      cy.xpath('(//span[@class="text-bold"])[1]').click({force: true}) // select 1st category of the list
      cy.xpath('//a[@role="button"]//span[@class="q-btn__wrapper col row q-anchor--skip"]').click( )
      cy.xpath('//i[normalize-space()="inventory"]').click()

      cy.contains('Title').type('RAZER KRAKEN V2 GREEN EDITION-ANALOG GAMING HEADSET')
      cy.contains('Sub Title').type('WIRELESS headphone')
      cy.contains('Unit of Measurement').type('Pcs')
      cy.contains('Quantity').type('1')
      cy.contains('Price').type('2100')
      cy.contains('Description')
      .type('Headphones are a pair of small loudspeaker drivers worn on or around the head over a users ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.')
      cy.contains('Slug').type('headphone')
      cy.contains('SEO Title').type('headphone')
      cy.contains('SEO Title').type('Wireless')
      cy.contains('Position').type('2')
      cy.xpath('//span[contains(text(),"save")]').click()
    })
})