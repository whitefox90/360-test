const {rightUsername} = require('./const/username');
const {passwordNothing, passwordInRussian, passwordIsOneCharacterLong, passwordIsOneCharacterShorter} = require('./const/password');

const arr = [
    {
        password: passwordNothing,
        comment: 'без пароля'
    },
    {
        password: passwordInRussian,
        comment: 'пароль на русском'
    },
    {
        password: passwordIsOneCharacterLong,
        comment: 'пароль длиной в один символ'
    },

]
describe("Authorization test", () => {
    arr.forEach(row => {
         it("Проверка пароля"+ row.comment, () => {
            cy.login(rightUsername, row.password)
        });
    });
});

