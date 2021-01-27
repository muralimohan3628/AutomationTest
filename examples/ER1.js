/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

    it('Login Test case',function() {


        cy.visit('demo-app.erudex.com')
        // login
        cy.get('.login-form > [type="text"]').type('Yannamaneni')
        cy.wait(2000)
        cy.get('.login-form > .ng-pristine').type('Murali3628')
        cy.wait(2000)
        cy.contains('Sign In').click({multiple: true})
    
        cy.wait(2000)
        
            cy.get('.success').click()
    })
    
    it('Curriculam page ',function() {    

        cy.get('.icon-curriculum.dash-img').click()
        cy.wait(2000)
        
        
    })
    
    it('Language & Grade',function() {
    
        cy.wait(3000)
        cy.get('ul li.option').contains('తెలుగు').click({force: true})

        cy.wait(3000)
        //cy.get('select').eq(2).select('2').contains('APSB-Intermediate 11').click({force: true}) 
        cy.get('ul li.option').contains('APSB-Intermediate 11').click({force: true})
    })
})    