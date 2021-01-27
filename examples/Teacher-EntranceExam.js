/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    before(function() {
        cy.fixture('ConstVarbl').then(function(data) {
                this.data=data  })
      })

    it('Login ',function() {    

        cy.visit(this.data.URL)
        // login
        cy.get('.login-form > [type="text"]').type('erudt.01')
        cy.get('.login-form > .ng-pristine').type('erudt.01')
        cy.contains('Sign In').click({multiple: true})
        
        cy.get('.success').click()        
        
    })
    it('EntranceExamPractise',function() {
        cy.get('.icon-curriculum.dash-img').click()
        cy.wait(1000)
        cy.get('a.ng-scope > .icon-competitive').click()
        cy.wait(2000)
        cy.get('.Physics').click()
        cy.wait(2000)
        cy.get('.Mathematics').click()
        cy.wait(2000)
        cy.get('select').eq(2).select('2385').contains('Matrices')
        cy.wait(2000)
        cy.get('[title="Types Of Matrices"]').click()
        cy.contains('>').click()// next pdf page
        cy.wait(2000)
        cy.contains('+').click()
        cy.wait(2000)
        cy.contains('Fit Page').click()
        cy.wait(2000)
        cy.get('#navBackBtn').click()
    })
})    