const {nameWithSmallLetter}=require('./const/nameTeams');
const {rightUsername}=require('../authorization/const/username');
const {rightPassword}=require('../authorization/const/password');
const {buttonQuestion, buttonNew, stringToEnterApollo, buttonSave, buttonEdit}=require ('./const/locatorsSelector');

describe('Administrators ability to edit commands',()=> {
    it('By', () => {
        cy.login(rightUsername, rightPassword)
        cy.get(buttonQuestion).click();
        cy.get(buttonNew).click()
        cy.get(stringToEnterApollo).type('Apollo')
        cy.get(buttonSave).click()
        cy.get(buttonEdit).click()
        cy.get(stringToEnterApollo).type('2A')
        cy.get(buttonSave).click()
    })
})







