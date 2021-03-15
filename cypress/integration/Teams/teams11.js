const {nameWithSmallLetter}=require('./const/nameTeams');
const {rightUsername}=require('../authorization/const/username');
const {rightPassword}=require('../authorization/const/password');




describe('teams10',()=> {
    it('By', () => {
        cy.login(rightUsername, rightPassword)
        cy.teams(nameWithSmallLetter)
        cy.get('#cancel > span.MuiButton-label').click()
        cy.get('input[type="text"]').type('Oreng')

    })
})







