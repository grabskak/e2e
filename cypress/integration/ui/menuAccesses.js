///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

import MainMenu from "../../support/page-object/mainMenu"

describe("Accesses", () =>  {
  
  beforeEach(() => {  
    
    cy.fixture("example").then(data =>{
    cy.loginAPI(data.email,data.password)
  })
    cy.visit('/')
     
  
   })
      //klienci
      it('schowsCompanysList', ()=>{
        cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Client/GetList?PageLength=5&Page=1").as("companysList");

        MainMenu.clickOnDostepy();     
        cy.get('#module_company').should("be.visible").trigger('focus').click()
        cy.wait("@companysList").its("response.statusCode").should("equal", 200); 
        cy.get('#gridClientsList-filter').should("be.visible")
      })
      
     //osoby
      it('schowsPersonList', ()=>{  

        cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/User/GetListExt?PageLength=5&Page=1&ClientId=d44f0ea9-54ed-44d4-a1ed-f51b1a12baf9").as("personList");

       MainMenu.clickOnDostepy();    
        cy.get('#module_clients').should("be.visible").trigger('focus').click()
     
        cy.wait("@personList").its("response.statusCode").should("equal", 200);
        cy.get('#clientSelect').should("be.visible")
      })

      //lokalizacje
      it('schowsLocationsList', ()=>{  

        cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Location/GetList?PageLength=5&Page=1").as("locationsList");

        MainMenu.clickOnDostepy();    
         cy.get('#module_locations').should("be.visible").trigger('focus').click()
         cy.wait("@locationsList").its("response.statusCode").should("equal", 200); 
         cy.get('#gridLocation').should("be.visible")
       })
       
  })