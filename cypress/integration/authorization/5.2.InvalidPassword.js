const {rightUsername} = require('./const/username');
const {passwordNothing, passwordInRussian, passwordIsOneCharacterLong} = require('./const/password');

const arr = [
    {
        password: passwordNothing,
        comment: 'без пароля',
        errorMessage: 'This field is required!'
    },
    {
        password: passwordInRussian,
        comment: 'пароль на русском',
        errorMessage: 'Invalid Password!'
    },
    {
        password: passwordIsOneCharacterLong,
        comment: 'пароль длиной в один символ',
        errorMessage: 'Invalid Password!'
    },

]
describe("InvalidPassword", () => {
    arr.forEach(row => {
         it("Проверка пароля"+ row.comment, () => {
            cy.login(rightUsername, row.password)
             cy.get('.alert-danger').contains(row.errorMessage)
        });
    });
});

