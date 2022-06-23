/*//<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe("Lighthouse audit", () => {
    it("check scores", () => {
        cy.visit('/')
        cy.fixture("example").then(data =>{
         cy.login(data.email,data.password)
         }) 
      cy.lighthouse({
        performance:50,
        accessibility: 50,
        "best-practices": 50,
        seo: 50,
        pwa: 15,
      });
      });
  });
  */