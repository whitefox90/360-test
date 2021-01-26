import username from "../integration/const/username";

const {usernameLocator} = require('../integration/const/locators');
const {passwordLocator} = require('../integration/const/locators');


Cypress.Commands.add("login", (username, password) => {
    cy.visit("/");
    cy.contains('Login').click()

    cy.get(usernameLocator)
        .type(username)

    if (password.length > 0) {
        cy.get(passwordLocator)
            .type(password)
    }

    cy.get("form").submit();
})


// Cypress.Commands.add("login", (username, password) => {
// cy.visit('http://vnbt.ru/')
// cy.get('[href="/login"]').click()
// cy.get(usernameLocator)
//     .type(rightUsername)
// cy.get(passwordLocator)
//     .type( loginIsOneCharacterShorter)
// cy.get('.btn.btn-primary').click()
// })