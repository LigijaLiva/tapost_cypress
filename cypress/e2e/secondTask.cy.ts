import {navigateTo} from "./page/navigationPage";
import {onFormLayoutsPage} from "./form.layoutPage";

describe('Tapost: test', () => {

    beforeEach('Open Tapost Angular app home pagr', () => {
        cy.visit('https://tapost.fly.dev/')
    })

    it('Submit inline from with name and email', () => {
        navigateTo.formLayoutsPage()
        cy.fixture('userData.json').as('userData')
        cy.get('@userData').then(data => {
            onFormLayoutsPage
                .submitInLineFormWithNameAndEmail(data.fullName, data.email)
        })

        onFormLayoutsPage.submitInLineFormWithNameAndEmail(Cypress.env('fullName'), Cyperss.env('email'))
    })
})