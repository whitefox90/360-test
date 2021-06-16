import username from "../../integration/authorization/const/username";
import nameTeams from "../../integration/teams/const/nameTeams";

const {nameTeamLocators} = require('../../integration/teams/const/locatorsTeams');

Cypress.Commands.add("teams", (nameTeam) => {
    cy.get('[href="/teams"]').click()
    cy.get('#add').click()

    if (nameTeam.length < 101) {
        cy.get(nameTeamLocators)
            .type(nameTeam)
    }
})


