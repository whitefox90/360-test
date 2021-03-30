const {nameWithSmallLetter}=require('./const/nameTeams');
const {rightUsername}=require('../authorization/const/username');
const {rightPassword}=require('../authorization/const/password');
const {buttonQuestion, buttonNew, stringToEnterApollo, buttonSave, buttonEdit, mainText, textAddedToMain}=require ('./const/locatorsSelector');

describe('Administrators ability to edit commands',()=> {
    it('By', () => {
        cy.login(rightUsername, rightPassword)
        cy.get(buttonQuestion).click();
        cy.get(buttonNew).click()
        cy.get(stringToEnterApollo).type(mainText)
        cy.get(buttonSave).click()
        cy.get(buttonEdit).click()
        cy.get(stringToEnterApollo).type(textAddedToMain)
        cy.get(buttonSave).click()
    })
})







