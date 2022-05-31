class MainMenu{

    get menuPESL(){
     return cy.get("#module_pricetags").wait(10000)
    }
    get menuDostepy(){
    return  cy.get("li").parents(".side-navigation__list").find("li").contains("Dostępy").wait(10000)
    //return cy.get(".side-navigation__text").contains('Dostępy').click().wait(5000)
    }
    get menuKonfiguracja(){
    return  cy.get("li").parents(".side-navigation__list").find("li").contains("Konfiguracja").wait(10000)
    }
    get menuSzablony(){
    return  cy.get("li").parents(".side-navigation__list").find("li").contains("Szablony").wait(10000)
    }

    clickOnPESL(){
        this.menuPESL.click();
    }
    clickOnDostepy(){
        this.menuDostepy.click();
    }
    clickOnKonfiguracja(){
        this.menuKonfiguracja.click();
    }
    clickOnSzablony(){
        this.menuSzablony.click();
    }

}

export default new MainMenu();