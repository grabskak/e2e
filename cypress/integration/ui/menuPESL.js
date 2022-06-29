///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

import MainMenu from "../../support/page-object/mainMenu"

describe("PESL", () =>  {
  
    before(() => { 
    
      cy.fixture("example").then(data =>{
        cy.loginAPI(data.email,data.password)
        }) 
     
      cy.visit('/')  
      
      })

      it('schowsPriceTagList ', ()=>{  
        cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/PriceTag/GetListExt?energyLevelTo=5000&PageLength=5&Page=1").as("allPESL");     
        MainMenu.clickOnPESL();
        cy.wait("@allPESL").its("response.statusCode").should("equal", 200); 
        cy.get('#gridPriceTag').should("be.visible")
      })

     
   
  })