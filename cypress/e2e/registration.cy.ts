describe('Registrierung', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
  })

  // Knopf für Registrierung
  it('click', () => {
      cy.get('.auth').contains('Sign up').click()
  })

  // Bereits registriert + Rücksprung
  it('already_registered', () => {
    cy.get('.auth').contains('Sign up').click()
    cy.get('a').click()
    cy.get('.auth').contains('Sign up').click()
  })

  // Name
  it('name', () => {
    cy.get('#name_input').type('Testuser-2');
  })

  // Kurzbeschreibung
  it('text', () => {
    cy.get('#portrait_input').type('Interessiert an umweltfreundlichen Fortbewegungsmitteln');
  })

  // E-Mail-Adresse (vergeben)
  it('mail failure', () => {
    cy.get('#email_input').type('Testuser1@gmx.de');
  })

  // Passwort fehlerhaft + prüfung
  it('password failure', () => {
    cy.get('#password_input').type('123');
    cy.get(':nth-child(6) > input').click()
    cy.get('#errorText').contains('Das Passwort muss mindestens 6 Zeichen lang sein')
  })

  // Passwort korrekt
  it('mail', () => {
    cy.get('#password_input').type('123456');
    cy.get(':nth-child(6) > input').click()
    })

  it('visible', () => {
  cy.get(':nth-child(6) > input').should('be.visible')
  cy.get('a').should('be.visible')
  })

  // E-Mail-Adresse (verfügbar) / E-Mail vor jedem Test -1
  it('mail', () => {
    cy.get('#errorText').contains('Es existiert bereits ein Account mit dieser E-Mail')
    cy.get('#email_input').clear()
    cy.get('#email_input').type('Testuser996@gmx.de');
  })

  // versenden des Formulars
  it('send', () => {
    cy.get(':nth-child(6) > input').click()
  })

})
