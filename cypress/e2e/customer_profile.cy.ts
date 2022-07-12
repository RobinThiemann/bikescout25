describe('customer_profile', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
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

// Login durchführen
it('check user information', () => {
  cy.get('.icon').click()
  cy.get('#userName').should('be.visible').contains("Test")
  cy.get('#userPortrait').should('be.visible').contains("Test")
  cy.get('app-user > :nth-child(2)').should('be.visible')
  cy.get('app-user > :nth-child(3)').should('be.visible')
})

})
