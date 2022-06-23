///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  import MainMenu from "../../support/page-object/mainMenu"
  
  describe("Configuration", () =>  {
    
    beforeEach(() => {  
      
      cy.fixture("example").then(data =>{
      cy.loginAPI(data.email,data.password)
    })
      cy.visit('/')
       
    
     })
        //wezly
        it('schowNodesList', ()=>{
          cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Nodes/GetCollectors?PageLength=5&Page=1").as("collectorList");
          cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Nodes/GetGateways?PageLength=5&Page=1").as("gatewayList");
  
          MainMenu.clickOnKonfiguracja(); 

          cy.get('#module_nodes').should("be.visible").trigger('focus').click()
          cy.wait("@collectorList").its("response.statusCode").should("equal", 200); 
          cy.wait("@gatewayList").its("response.statusCode").should("equal", 200); 
          cy.get('#gridCollector-body').should("be.visible")
          cy.get('#gridGateway-body').should("be.visible")
        })


           //produkty
           it('schowProductsList', ()=>{
            cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Product/GetList?PageLength=5&Page=1").as("productsList");
          
    
            MainMenu.clickOnKonfiguracja(); 
  
            cy.get('#module_products').should("be.visible").trigger('focus').click()
            cy.wait("@productsList").its("response.statusCode").should("equal", 200); 
          
            cy.get('#gridProduct-body').should("be.visible")
           
          })


           //role
           it('schowRolesList', ()=>{
            cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Role/GetList?PageLength=5&Page=1").as("rolesList");
            cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Function/GetList?PageLength=5&Page=1").as("functionsList");
    
            MainMenu.clickOnKonfiguracja(); 
  
            cy.get('#module_roles').should("be.visible").trigger('focus').click()
            cy.wait("@rolesList").its("response.statusCode").should("equal", 200); 
            cy.wait("@functionsList").its("response.statusCode").should("equal", 200); 
          
            cy.get('#gridRoles-body').should("be.visible")
            cy.get('#gridFunctions-body').should("be.visible")
           
          })

            //dictionary
            it('schowDistionariesList', ()=>{
                cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Dictionary/GetDictionaryList?PageLength=5&Page=1").as("dictionarysList");
              //  cy.intercept("GET", "https://aden-pricetag-platform.azurewebsites.net/api/Dictionary/GetList?PageLength=5&Page=1&DictionaryName=Typ%20przyk%C5%82adowy").as("dictionaryList");
        
                MainMenu.clickOnKonfiguracja(); 
      
                cy.get('#module_dictionary').should("be.visible").trigger('focus').click()
                cy.wait("@dictionarysList").its("response.statusCode").should("equal", 200); 
            //    cy.wait("@dictionaryList").its("response.statusCode").should("equal", 200); 
              
                cy.get('#gridDictionaryList-body').should("be.visible")
            //    cy.get('#gridDictionary-body').should("be.visible")
               
              })

    })