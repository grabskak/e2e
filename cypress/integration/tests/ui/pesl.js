describe("PESL", () =>  {
  
    before(() => {  
     // cy.login();
        cy.visit('/');
        cy.get('#login-username').type('k.grabska@aden.pl');
        cy.get('#login-password').type('Testye2e');
        cy.get('.login__submit-btn').click();      
      })


      it('schowsPriceTagList ', ()=>{
        cy.get('#gridPriceTag').should("be.visible")
      //  cy.get('#gridPriceTag_td_1_0').contains('1')
      })
   
  })