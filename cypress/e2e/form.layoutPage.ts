export class FormLayoutsPage {

    submitInLineFormWithNameAndEmail(fullName: string, email: string) {
        cy.contains('nb-card', 'Incline form').then(form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(fullName)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }
}
export const onFormLayoutsPage = new FormLayoutsPage();