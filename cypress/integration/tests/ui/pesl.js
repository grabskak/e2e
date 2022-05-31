describe("PESL", () =>  {
  
    before(() => { 
      cy.visit('/') 
      cy.login();  
      //cy.loginAPI();    
      })

      it('schowsPriceTagList ', ()=>{
        cy.get('#gridPriceTag').should("be.visible")
      })
   
  })