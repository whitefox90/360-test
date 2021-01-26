const {usernameNumber}=require('./const/username');
const {rightPassword}=require('./const/password.js');


describe ('username 9', ()=>{
    it ('By', ()=>{
        cy.login(usernameNumber,rightPassword)
    })
})