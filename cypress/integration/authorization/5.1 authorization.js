const {rightUsername}=require('./const/username');
const {rightPassword}=require('./const/password.js');
const textOnPage = ".jumbotron h3";
const comparisonText="Profile";

describe ('authorization', ()=>{
    it ('By', ()=>{
        cy.login(rightUsername,rightPassword)
        cy.get(textOnPage).contains(comparisonText)
        cy.get('#root > div > nav > div.navbar-nav.mr-auto > li:nth-child(3) > a').contains('Teams')
    })
})