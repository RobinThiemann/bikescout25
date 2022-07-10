describe('Logout', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
  })

  // Knopf für den Login
  it('click', () => {
    cy.get('.auth').contains('Login').click();
  })

    // Login für den Test erforderlich
  it('login', () => {
    cy.get('#email_input').type('test1@test.de');
    cy.get('#password_input').type('123456');
    cy.get(':nth-child(4) > input').click();
  })

  // Prüfung ob Login erfolgreich
  it('user profile', () => {
    cy.get('.icon').click();
    cy.get('.img').click();
  })

<<<<<<< HEAD
  // Prüfung ob Logout erfolgreich
=======
  // Prüfung ob Logout erfolgreich !!!WORK IN PROGRESS!!!
>>>>>>> 38a1c4d25837df604a88c7d924943c90d02da159
    it('click', () => {
      cy.contains('Logout').click()
      cy.get('.wrapper > :nth-child(3)').click();
      cy.get('#errorText_home').contains('Bitte logge dich ein, um diese Funktion zu nutzen.');
  })
})
