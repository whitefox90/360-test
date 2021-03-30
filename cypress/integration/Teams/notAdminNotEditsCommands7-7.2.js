const {nameWithSmallLetter} = require('./const/nameTeams');
const {rightUsername} = require('../authorization/const/username');
const {rightPassword} = require('../authorization/const/password');
const {buttonLogin} = require('./const/locatorsSelector');

describe("Not the ability for a non-administrator to edit commands", () => {
    it('By', () => {
        //cy.visit("/");
       // cy.get('[href="/teams"]').should('have.length', 0)
        cy.visit("http://localhost:8080/teams");
        cy.get(buttonLogin).click()

    })
})







