// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import Signin from '../support/pageObjects/Signin'

const Assessmnt = require('../fixtures/Assessment.json')
const Constvarbl = require('../fixtures/ConstVarbl.json')
const Dataentry = require('../fixtures/DatEntry.json')

Cypress.Commands.add("Signin", ( Username, Password) => {
    const LogIn =new Signin();
    cy.visit(Dataentry.URL)
    LogIn.getUsername().type(Username).should('have.value', Username)
    LogIn.getPassword().type(Password).should('have.value', Password)
    LogIn.getSignin().click()
    LogIn.getSuccess().click()  
  })

  //Curriculum
  Cypress.Commands.add("Curriculum", ()=>{
    
    cy.get('.icon-curriculum.dash-img').click()
  })
//Logout Fx
Cypress.Commands.add("Logout", ()=>{
    
    cy.wait(2000)
    cy.get('[ng-click="logout()"]').click()
})  