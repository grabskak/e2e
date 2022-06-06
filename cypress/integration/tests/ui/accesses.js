///<reference types="cypress"/>
import MainMenu from "../../../support/page-object/mainMenu"

describe("Accesses", () =>  {
  
    before(() => {  
       cy.visit('/')
       cy.fixture("example").then(data =>{
        cy.login(data.email,data.password)
        })
      
      })

    

      //klienci
      it('schowsCompanysList', ()=>{
        MainMenu.clickOnDostepy();     
        cy.get('#module_company').click()   
        cy.get('#gridClientsList-filter').should("be.visible")
      })
      
     //osoby
      it('schowsPersonList', ()=>{  
       MainMenu.clickOnDostepy();    
        cy.get('#module_clients').click()
        cy.get('#clientSelect').should("be.visible")

      })
      
 
  })