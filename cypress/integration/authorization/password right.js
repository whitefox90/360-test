const {rightUsername}=require('./const/username');
const {rightPassword}=require('./const/password.js');


describe ('login 2', ()=>{
    it ('By', ()=>{
        cy.login(rightUsername,rightPassword)
        cy.get(".jumbotron h3").contains("Profile")
    })
})