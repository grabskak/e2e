///<reference types="cypress"/>

import MainMenu from "../../../support/page-object/mainMenu"

describe("Menu", () =>  {
  
    beforeEach(() => {  
       cy.visit('/')
       cy.fixture("example").then(data =>{
       cy.login(data.email,data.password)
       })
      })

      it('selectPESL', ()=>{
        MainMenu.clickOnPESL();
      })

      it('selectDostepy', ()=>{
        MainMenu.clickOnDostepy();
      })

      it('selectKonfiguracja', ()=>{
        MainMenu.clickOnKonfiguracja();
      })

      it('selectSzablony', ()=>{
        MainMenu.clickOnSzablony();
      })

  })