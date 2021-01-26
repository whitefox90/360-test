const {rightUsername}=require('./const/username');
const {passwordIsOneCharacterLong}=require('./const/password.js');


describe ('login 3', ()=>{
    it ('By', ()=>{
        cy.login(rightUsername,passwordIsOneCharacterLong)
    })
})