const {usernameShorte}=require('./const/username');
const {rightPassword}=require('./const/password.js');


describe ('username 6', ()=>{
    it ('By', ()=>{
        cy.login(usernameShorte,rightPassword)
    })
})