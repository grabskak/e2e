describe("Accesses", () =>  {
  
    before(() => {  
        cy.visit('/');
        cy.get('#login-username').type('k.grabska@aden.pl');
        cy.get('#login-password').type('Testye2e');
        cy.get('.login__submit-btn').click();      
      })


      it('schowsCompanysList', ()=>{
        cy.get(':nth-child(2) > .side-navigation__category-btn > .side-navigation__text').click()
        cy.get('#module_company').click()
        cy.get('.main-content > :nth-child(1) > :nth-child(2) > .btn').should("be.visible").and("contain", 'Dodaj nowego')
        //cy.get('#gridClientsList_td_1_0').should("be.visible").contains('1')
      })
     
      //it('schowsPersonList', ()=>{
     //   cy.get(':nth-child(2) > .side-navigation__category-btn > .side-navigation__text').click()
      //  cy.get('#module_clients').click()
        //cy.get('#gridClientsList_td_1_0').contains('1')
     // })

 
  })