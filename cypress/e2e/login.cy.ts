<<<<<<< HEAD
// Entsprechendes Skript ausführen (package.json - hover + ausführen)

=======
>>>>>>> 38a1c4d25837df604a88c7d924943c90d02da159
describe('Login', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
  })

    // Link für die Registrierung
    it('click', () => {
      cy.get('.auth').contains('Login').click()
      cy.get('a').contains('Sie haben noch keinen Account?').click()
    })

  // Knopf für den Login
  it('click', () => {
    cy.get('.auth').contains('Login').click()
  })

  // Falsche Email / Richtiges Passwort
  it('mail failure', () => {
    cy.get('#email_input').type('test@test.de');
    cy.get('#password_input').type('123456');
    cy.get(':nth-child(4) > input').click()
    cy.get('#errorText').contains('Email oder Passwort inkorrekt')
    })

  // Falsches Passwort / Richtige Email
  it('password failure', () => {
    cy.get('#email_input').clear();
    cy.get('#email_input').type('test1@test.de');
    cy.get('#password_input').type('1234567');
    cy.get(':nth-child(4) > input').click()
    cy.get('#errorText').contains('Email oder Passwort inkorrekt')
  })

  // Richtiges Passwort
  it('login', () => {
    cy.get('#password_input').clear();
    cy.get('#password_input').type('123456');
    cy.get(':nth-child(4) > input').click()
    })

})
