const {rightUsername} = require('../../integration/authorization/const/username');
const {rightPassword} = require('../../integration/authorization/const/password');
const {usernameLocator} = require('../../integration/authorization/const/locators');
const {passwordLocator} = require('../../integration/authorization/const/locators');


Cypress.Commands.add("login", (username = rightUsername, password = rightPassword) => {
    cy.visit("/");
    cy.contains('Login').click()

    if(!username || !username.length) {
        cy.get(usernameLocator)
            .clear()
    } else {

        cy.get(usernameLocator)
            .type(username)

    }
    if (password.length > 0) {
        cy.get(passwordLocator)
            .type(password)
    }

    cy.get("form").submit();
})

Cypress.Commands.add("loginEmpty", (username = rightUsername) => {
    cy.visit("/");
    cy.contains('Login').click()

    cy.get(usernameLocator)
        .type(username)

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