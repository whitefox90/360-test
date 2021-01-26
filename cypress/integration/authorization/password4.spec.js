const {rightUsername}=require('./const/username');
const {passwordInRussian}=require('./const/password.js');


describe ('login 4', ()=>{
    it ('By', ()=>{
        cy.login(rightUsername,passwordInRussian)
    })
})