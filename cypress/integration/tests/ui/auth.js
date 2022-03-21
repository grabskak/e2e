describe("Login Page", () =>  {
  
  before(() => {  
   // cy.login();
      cy.visit('/');  
    })

    it('greets with Login', ()=>{
      cy.contains('h1','Logowanie')    
    })

    it("should login with access", ()=> {
      cy.get('#login-username').type('k.grabska@aden.pl');
      cy.get('#login-password').type('Testye2e');
      cy.get('.login__submit-btn').click();
      cy.url().should('eq', Cypress.env('baseUrl') + '/index.php'); 
    })
})