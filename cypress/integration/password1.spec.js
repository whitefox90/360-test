const {rightUsername}=require('./const/username');
const {rightPassword}=require('./const/password');

describe("Authorization test", () => {
    it("By", () => {
        cy.login(rightUsername, rightPassword)
    });
});

