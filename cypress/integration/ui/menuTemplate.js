import MainMenu from "../../support/page-object/mainMenu"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe("Template", () =>  {
  
  beforeEach(() => {  
   
    cy.fixture("example").then(data =>{
    cy.loginAPI(data.email,data.password)
    })
    cy.visit('/')
   })

      it('changeParamsFontName', ()=>{
        MainMenu.clickOnSzablony();    
        MainMenu.clickOnSzablony();    
        cy.get("#fd92c04d-4651-44b3-bfa9-8ab70e7c2862").click().wait(20000) //.should('be.selected')     //select template 
       
        cy.get("#cena-glowna-pln").trigger('focus')
        cy.get("#cena-glowna-pln").click()

        cy.get("#params-font-name").trigger('focus')
       
        //pobierz co tam bylo ustawione
        cy.get("#params-font-name").invoke("prop","value").then(wartosc =>{
        cy.log(wartosc);
        let fontValue = wartosc;
        cy.wrap(fontValue).as('fontValue')
        })

        cy.get('@fontValue').then(fontValue => {

        cy.get("#params-font-name").select(parseInt(fontValue)+1).wait(5000)
        cy.get("#params-font-name").should('have.value',parseInt(fontValue)+1)

        cy.get("#params-font-name").trigger('focus')
        cy.get("#params-font-name").select(fontValue)
        cy.get("#params-font-name").should('have.value', fontValue)
        })

       })

    it('textEditorFontSizeGetValue', ()=>{

      MainMenu.clickOnSzablony();    
      MainMenu.clickOnSzablony(); 
      cy.get("#fd92c04d-4651-44b3-bfa9-8ab70e7c2862").click().wait(20000) 

        cy.get("#cena-glowna-pln").trigger('focus')
        cy.get("#cena-glowna-pln").click()

         //pobierz co tam bylo ustawione
         cy.get("#text-editor-fontSize")
           .invoke("prop","value")
           .then(fontSize =>{
               cy.log(fontSize);
               let fontSizeValue = fontSize;
               cy.wrap(fontSizeValue).as('fontSizeValue')
                })
          cy.get('@fontSizeValue').then(fontSizeValue => {
          cy.get("#text-editor-fontSize").clear()
          cy.get("#text-editor-fontSize").type(fontSizeValue+1,{delay:200}).click()
          cy.get("#text-editor-fontSize")
            .invoke("prop", "value")
            .should(sometext =>{expect(sometext).to.equal(fontSizeValue+1)})//sprawdzam czy sie dobrze ustawilo

          cy.get("#text-editor-fontSize").clear()
          cy.get("#text-editor-fontSize").type(fontSizeValue,{delay:200}).click()
          cy.get("#text-editor-fontSize").invoke("prop", "value").should('eq',fontSizeValue)
          })
      
     
      })

      it('textEditorFontSize', ()=>{
        MainMenu.clickOnSzablony();    
        MainMenu.clickOnSzablony(); 
        cy.get("#fd92c04d-4651-44b3-bfa9-8ab70e7c2862").click().wait(20000) 
  
        cy.get("#cena-glowna-pln").trigger('focus')
        cy.get("#cena-glowna-pln").click()
        cy.get("#text-editor-fontSize").clear()
        cy.get("#text-editor-fontSize").type("23{enter}",{delay:200})
        cy.get("#text-editor-fontSize").clear()
        cy.get("#text-editor-fontSize").type("60{enter}",{delay:200})
             
        })

    })