
const nameteams = [
    {
        name: 'Apollo',
        selector: '#commit > span.MuiButton-label'
    },
    {
        name: 'Команда',
        selector: '#commit > span.MuiButton-label'
    },
    {
        name: '568975',
        selector: '#commit > span.MuiButton-label'
    },
    {
        name: 'Hfflk№?@%',
        selector: '#commit > span.MuiButton-label'
    },
    {
        name: 'G',
        selector: '#commit > span.MuiButton-label'
    },
    {
        name: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkjjjjjj',
        selector: '#commit > span.MuiButton-label'
    },
    {
        name: 'Go-Go',
        selector: '#commit > span.MuiButton-label'
    },
    {
        name: 'jhjhgghj',
        selector: '#commit > span.MuiButton-label'
    },
];


describe('teams1', () => {
    it('By', () => {
        cy.login()
        cy.get('#root > div > nav > div.navbar-nav.mr-auto > li:nth-child(3) > a').click()

        const newButtonLocator = '#add > span.MuiButton-label'
        const newItemInputLocator = 'input'
        const saveButtonLocator = '#commit > span.MuiButton-label'

        nameteams.forEach((row) => {
            cy.get(newButtonLocator).click()
            cy.waitFor(newItemInputLocator)
            cy.get(newItemInputLocator).eq(1).type(row.name);
            cy.get(saveButtonLocator).click()
        })
    })
})





