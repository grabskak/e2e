// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/*
Cypress.Commands.add('login',() => {
    //cy.visit('/#/platform_test/login.php')
    cy.get('#login-username').type('k.grabska@aden.pl')
    cy.get('#login-password').type('Testye2e')
    cy.get('.login__submit-btn').click()
})
*/

Cypress.Commands.add('login',(email,password) => {
    //cy.visit('/#/platform_test/login.php')
    cy.get('#login-username').type(email)
    cy.get('#login-password').type(password)
    cy.get('.login__submit-btn').click()
})

Cypress.Commands.add('loginAPI',() => {
    cy.request({
        method: 'POST',
        url: 'https://aden-pricetag-platform.azurewebsites.net/api/User/Login',
        body: {
            "email": "k.grabska@aden.pl",
            "password": "Testye2e"
        }
})
.then((resp)=> {
    window.localStorage.setItem('jwt',resp.body.token)
})   
})
