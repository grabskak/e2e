class MainMenu{

    get menuPESL(){
     return cy.get("#module_pricetags") //wait(10000);
    }
    get menuDostepy(){
    return  cy.get("li").parents(".side-navigation__list").find("li").contains("Dostępy")
    }
    get menuKonfiguracja(){
    return  cy.get("li").parents(".side-navigation__list").find("li").contains("Konfiguracja")
    }
    get menuSzablony(){
    return  cy.get("li").parents(".side-navigation__list").find("li").contains("Szablony")
    }

    clickOnPESL(){
        this.menuPESL.click().wait(10000);
    }
    clickOnDostepy(){
        this.menuDostepy.click().wait(10000);
    }
    clickOnKonfiguracja(){
        this.menuKonfiguracja.click().wait(10000);
    }
    clickOnSzablony(){
        this.menuSzablony.click().wait(10000);
    }

}

export default new MainMenu();