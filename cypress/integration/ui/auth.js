describe("Login Page", () =>  {
  
  before(() => {  
      cy.visit('/');  
    })

    it('greets with Login', ()=>{
      cy.contains('h1','Logowanie')    
    })

    it("should login with access", ()=> {
      cy.fixture("example").then(data =>{
        cy.login(data.email,data.password)
        })
      cy.url().should('eq', Cypress.env('baseUrl') + '/index.php'); 
    })
})