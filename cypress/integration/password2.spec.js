const {usernameLocator} = require('./const/locators');
const {passwordLocator}=require('./const/locators');
const {rightUsername}=require('./const/username');
const {passwordIsOneCharacterShorter}=require('./const/password.js');


describe ('login 2', ()=>{
    it ('By', ()=>{
        cy.login(rightUsername,passwordIsOneCharacterShorter)
    })
})