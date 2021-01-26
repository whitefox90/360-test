const {rightUsername}=require('./const/username');
const {passwordNothing}=require('./const/password.js');


describe ('login 5', ()=>{
    it ('By', ()=>{
        cy.login(rightUsername,passwordNothing)
    })
})