const {rightUsername}=require('./const/username');
const {rightPassword}=require('./const/password');

describe("Team test", () => {
    it("By", () => {
        cy.login(rightUsername, rightPassword)
    });
});

