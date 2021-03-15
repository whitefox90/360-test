const {nameWithSmallLetter}=require('./const/nameTeams');
const {rightUsername}=require('../authorization/const/username');
const {rightPassword}=require('../authorization/const/password');




describe('teams10',()=> {
    it('By', () => {
        cy.login(rightUsername, rightPassword)
        cy.get('#root > div > nav > div.navbar-nav.mr-auto > li:nth-child(3)').click()
        cy.get('#add > span.MuiButton-label').click()
    })
})







