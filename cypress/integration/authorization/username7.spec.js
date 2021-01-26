const {usernameLong}=require('./const/username');
const {rightPassword}=require('./const/password.js');


describe ('username 7', ()=>{
    it ('By', ()=>{
        cy.login(usernameLong,rightPassword)
    })
})