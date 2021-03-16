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
];
const textOnPage = '#root > div > div.container-fluid.mt-3 > div > div > form > div:nth-child(4) > div';
const comparisonText = 'Invalid Password!';

describe("Authorization test", () => {
    arr.forEach(row => {
         it("Проверка пароля " + row.coment, () => {
            cy.login(rightUsername, row.password)
            cy.get(textOnPage).contains(comparisonText)
             console.log(row.password)

        });

    });
});

