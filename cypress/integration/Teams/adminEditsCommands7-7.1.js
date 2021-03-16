const {nameWithSmallLetter}=require('./const/nameTeams');
const {rightUsername}=require('../authorization/const/username');
const {rightPassword}=require('../authorization/const/password');




describe('Возможность администратора редактировать команды',()=> {
    it('By', () => {
        cy.login(rightUsername, rightPassword)
        cy.get('#root > div > nav > div.navbar-nav.mr-auto > li:nth-child(3) > a').click();
        cy.get('#edit').click()
        cy.get('#root > div > div.container-fluid.mt-3 > div > header > div > div > div > table > tbody > tr:nth-child(1) > td.MuiTableCell-root.MuiTableCell-body.jss49 > div > input').type('2')
        cy.get('#commit > span.MuiButton-label').click()
    })
})







