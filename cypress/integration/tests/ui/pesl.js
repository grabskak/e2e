describe("PESL", () =>  {
  
    before(() => { 
      cy.visit('/') 
      cy.fixture("example").then(data =>{
        cy.login(data.email,data.password)
        }) 
      //cy.loginAPI();    
      })

      it('schowsPriceTagList ', ()=>{
        cy.get('#gridPriceTag').should("be.visible")
      })
   
  })