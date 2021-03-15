import password from "./const/password";

const {rightUsername} = require('./const/username');
const {passwordNothing, passwordInRussian, passwordIsOneCharacterLong, passwordIsOneCharacterShorter} = require('./const/password');

const arr = [
    {
        password: passwordNothing,
        coment: 'без пароля'
    },
    {
        password: passwordInRussian,
        coment: 'пароль на русском'
    },
    {
        password: passwordIsOneCharacterLong,
        coment: 'пароль длиной в один символ'
    },
    {
        password: passwordIsOneCharacterShorter,
        coment: 'пароль на один символ короче'
    }
]
describe("Authorization test", () => {
    arr.forEach(row => {
        let test = it("Проверка пароля " + row.coment, () => {
            cy.login(rightUsername, row.password)


        });
    });
});

