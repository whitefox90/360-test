const {rightUsername}=require('./const/username');
const {rightPassword}=require('./const/password.js');
const textOnPage = ".jumbotron h3";
const comparisonText="Profile";

describe ('login 2', ()=>{
    it ('By', ()=>{
        cy.login(rightUsername,rightPassword)
        cy.get(textOnPage).contains(comparisonText)
    })
})