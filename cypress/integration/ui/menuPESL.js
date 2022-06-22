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
      
      cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/PriceTag/GetListExt?PageLength=5&Page=1").as("allPESL");
      })

      it('schowsPriceTagList ', ()=>{
        MainMenu.clickOnPESL();
        cy.wait("@allPESL");
        cy.get('#gridPriceTag').should("be.visible")
      })

     
   
  })