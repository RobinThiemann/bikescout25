describe('lending', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
  })

// Error Message - Verleihen ohne Login
it('lending without login', () => {
  cy.get('.wrapper > :nth-child(3)').click()
  cy.get('#errorText_home').contains('Bitte logge dich ein, um diese Funktion zu nutzen.')
})

// Knopf für den Login
  it('click', () => {
    cy.get('.auth').contains('Login').click()
  })

  // Login durchführen
  it('login', () => {
    cy.get('#email_input').type('test1@test.de')
    cy.get('#password_input').type('123456')
    cy.get(':nth-child(4) > input').click()
})

// Error Message - Verleihen ohne Klick auf Karte
  it('lending without click on map', () => {
    cy.get('.wrapper > :nth-child(3)').click()
    cy.get('#errorText_home').contains('Wählen Sie einen Punkt auf der Karte aus')
})

// Login durchführen v2
it('login', () => {
  cy.get('.auth').contains('Login').click()
  cy.get('#email_input').type('test1@test.de')
  cy.get('#password_input').type('123456')
  cy.get(':nth-child(4) > input').click()
})

// Markierung auf Karte hinzufügen und Knopf betätigen
  it('creating marker on map', () => {
    cy.get('#map').click()
    cy.get('.leaflet-popup-content-wrapper').click()
    cy.get('.wrapper > :nth-child(3)').click()
})

// Formular unvollständig ausfüllen - alle bis auf Rahmengröße
it('missing data in form', () => {
  cy.get('.lend').should('be.visible');
  cy.get('#bikeName_input').type('Rennrad - BJ 2018')
  cy.get(':nth-child(6) > input').click()
  cy.get('#bikeErrorText').contains('Bitte füllen Sie alle Felder aus')

  cy.get('#bikeName_input').clear();
  cy.get('#bikePortrait_input').type('Gepflegtes Rennrad aus dem Jahr 2018')
  cy.get(':nth-child(6) > input').click()
  cy.get('#bikeErrorText').contains('Bitte füllen Sie alle Felder aus')

  cy.get('#bikeColour_input').type('rot')
  cy.get(':nth-child(6) > input').click()
  cy.get('#bikeErrorText').contains('Bitte füllen Sie alle Felder aus')

  cy.get('#bikeName_input').clear()
  cy.get('#bikePortrait_input').clear()
  cy.get('#bikeColour_input').clear()
})

// Formular korrekt ausfüllen
it('send form', () => {
  cy.get('.lend').should('be.visible')
  cy.get('#bikeName_input').type('Rennrad - BJ 2018')
  cy.get('#bikePortrait_input').type('Gepflegtes Rennrad aus dem Jahr 2018')
  cy.get('#bikeColour_input').type('rot')
  cy.get('#bikeSize_input').type('20 Zoll')
  cy.get(':nth-child(6) > input').click()
})

})
