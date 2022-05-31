describe("Login Page", () =>  {
  
  before(() => {  
      cy.visit('/');  
    })

    it('greets with Login', ()=>{
      cy.contains('h1','Logowanie')    
    })

    it("should login with access", ()=> {
      cy.login()
      cy.url().should('eq', Cypress.env('baseUrl') + '/index.php'); 
    })
})