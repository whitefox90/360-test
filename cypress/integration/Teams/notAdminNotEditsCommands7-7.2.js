const {nameWithSmallLetter} = require('./const/nameTeams');
const {rightUsername} = require('../authorization/const/username');
const {rightPassword} = require('../authorization/const/password');
const buttonNotFound = '#root > div > nav > div.navbar-nav.mr-auto > li:nth-child(3) > a';

describe('Not the ability for a non-administrator to edit commands', () => {
    it('By', () => {
        cy.visit("/");
        cy.get('[href="/teams"]').should('have.length', 0)
    })
})







