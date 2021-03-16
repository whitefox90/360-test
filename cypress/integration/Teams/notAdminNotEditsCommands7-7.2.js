const {nameWithSmallLetter}=require('./const/nameTeams');
const {rightUsername}=require('../authorization/const/username');
const {rightPassword}=require('../authorization/const/password');




describe('Не возможность не администратора редактировать команды',()=> {
    it('By', () => {
        cy.visit("/");
        cy.get('#root > div > nav > div.navbar-nav.ml-auto > li:nth-child(1) > a').click()
        cy.get('#root > div > nav > div.navbar-nav.mr-auto > li:nth-child(3) > a').click()
    })
})







