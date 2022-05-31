///<reference types="cypress"/>

import MainMenu from "../../../support/page-object/mainMenu"

describe("Menu", () =>  {
  
    beforeEach(() => {  
       cy.visit('/')
       cy.login()
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