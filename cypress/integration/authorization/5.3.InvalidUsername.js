const {rightPassword} = require('./const/password');
const {UsernameNothing, usernameInRussian, usernameNumber} = require('./const/username');

const arr = [
    {
        username: UsernameNothing,
        comment: 'без имени',
        errorMessage: 'This field is required!'
    },
    {
        username: usernameInRussian,
        comment: 'имя на русском',
        errorMessage: 'User Not found.'
    },
    {
        username: usernameNumber,
        comment: 'имя цифрами',
        errorMessage: 'User Not found.'
    },

]
describe("InvalidUsername", () => {
    arr.forEach(row => {
         it("Проверка username"+ row.comment, () => {
            cy.login(row.username, rightPassword)
             cy.get('.alert-danger').contains(row.errorMessage)
        });
    });
});

