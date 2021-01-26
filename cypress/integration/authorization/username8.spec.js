const {usernameInRussian}=require('./const/username');
const {rightPassword}=require('./const/password.js');


describe ('username 8', ()=>{
    it ('By', ()=>{
        cy.login(usernameInRussian,rightPassword)
    })
})