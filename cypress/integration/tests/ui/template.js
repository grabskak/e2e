import MainMenu from "../../../support/page-object/mainMenu"

describe("Template", () =>  {
  
    before(() => {  
       cy.visit('/')
       cy.fixture("example").then(data =>{
        cy.login(data.email,data.password)
        })
      })

      it('schowsSzablonyList', ()=>{
        MainMenu.clickOnSzablony();      
      })

      it('selectTemplate', ()=>{
        cy.get("#fd92c04d-4651-44b3-bfa9-8ab70e7c2862").click().wait(2000) //.should('be.selected')            
      })



      it('changeParamsFontName', ()=>{

        cy.get("#cena-glowna-pln").trigger('focus')
        cy.get("#cena-glowna-pln").click()

        cy.get("#params-font-name").trigger('focus')
        //pobierz co tam bylo ustawione

        cy.get("#params-font-name").invoke("prop","value").then(wartosc =>{
          cy.log(wartosc)
        })

        cy.get("#params-font-name").select(1).wait(5000)
        cy.get("#params-font-name").should('have.value', 1)

        cy.get("#params-font-name").trigger('focus')
        cy.get("#params-font-name").select(2)
        cy.get("#params-font-name").should('have.value', 2)


       })

    it('textEditorFontSize', ()=>{

        cy.get("#cena-glowna-pln").trigger('focus')
        cy.get("#cena-glowna-pln").click()

        cy.get("#text-editor-fontSize").clear()
        cy.get("#text-editor-fontSize").type("23{enter}",{delay:200})
       // cy.get("#text-editor-fontSize").invoke("prop", "value").then(sometext =>cy.log(sometext))

       

        cy.get("#text-editor-fontSize").clear()
        cy.get("#text-editor-fontSize").type("60{enter}",{delay:200})
       // cy.get("#text-editor-fontSize").invoke("prop", "value").then(sometext2 =>cy.log(sometext2))
     
      })

    })