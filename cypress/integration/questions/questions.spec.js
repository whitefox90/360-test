const {rightUsername} = require('../authorization/const/username');
const {rightPassword} = require('../authorization/const/password');
const data = [
    {
        name: 'english level',
        selector: '#root > div > div.container-fluid.mt-3 > div > header > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
        descr: 'english leve descr'
    },
    {
        name: 'teamwork',
        selector: '#root > div > div.container-fluid.mt-3 > div > header > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2)',
        descr: 'teamwork descr'
    },
    {
        name: 'initiative',
        selector: '#root > div > div.container-fluid.mt-3 > div > header > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(2)',
        descr: 'initiative descr'
    },
]

describe('questions', () => {
    it('By', () => {
        cy.task('queryDb', `TRUNCATE review360.questions`);
        cy.login(rightUsername, rightPassword)


        data.forEach((row) => {
            cy.task('queryDb', `INSERT INTO review360.questions
(question, description, createdAt, updatedAt) values ('${row.name}', '${row.descr}', NOW(), NOW())`);
        })

        cy.visit('/questions')

        data.forEach((row) => {
            cy.get(row.selector).contains(row.name)
        })
    })
})
