describe('borrowing', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
  })

// Prüfung, ob User eingeloggt ist
it('click', () => {
  cy.get('.wrapper > :nth-child(2)').click()
  cy.get('#errorText_home').contains('Bitte logge dich ein, um diese Funktion zu nutzen.')
})

// Knopf für den Login
  it('click', () => {
    cy.get('.auth').contains('Login').click()
  })

// Login durchführen + Auflistung aller Fahrräder anzeigen
  it('login + get listing of all bikes', () => {
    cy.get('#email_input').type('test1@test.de')
    cy.get('#password_input').type('123456')
    cy.get(':nth-child(4) > input').click()

    cy.get('#map').click()
    cy.get('.wrapper > :nth-child(2)').click()
    cy.wait(150)
    cy.get(':nth-child(1) > .collection-head').should('be.visible')
  })

})
