/// <reference types="cypress"/>

import Chance from "chance";
import { beforeEach } from "mocha";
const chance = new Chance();

describe('bikescout25', () => {

  //email und passwort erstellen
  const email = chance.email();
  const pass = 'ValidPassword23';

  beforeEach(() => {
    cy.visit('http://localhost:4200/home');
  })

  it('has a title', () => {
    cy.contains('bikescout25')
    //cy.contains('Privatpersonen Fahrradverleih von Karlsruhe')
  })

  /*it('blocks protected routes', () => {
    
    leihen und verleihen werden geblockt, solange Benutzer nicht eingeloggt ist

    cy.get('#navToggle').click();
    cy.contains('Leihen').click();

    cy.get('notification-message').children()
      .should('contain', 'You must be logged in!');
      .and('be.visible')
  });
  */

  it('signs up a new user', () =>{

    //Login Button
    cy.get('#navToggle').click();
    cy.contains('Login').click();

    cy.url().should('include', 'login');
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(pass);
    cy.get('button[type=submit]').click();

    cy.contains('bikescout25');
    cy.contains('Logout').click();
  
  })


})