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
it('Curriculam page',function() {

    // curriculam tab
    cy.get('.icon-curriculum.dash-img').click()
    cy.wait(1000)
    
    cy.get('ul li.option').contains('IIT-Class 12').click({force: true})    
    cy.get('.subject-button.Chemistry ').click()
    cy.wait(1000)
    cy.get('.subject-button.Mathematics').click()
    cy.wait(1000)
    cy.get('.subject-button.Physics').click()
    cy.wait(1000)
    // open and close chapter contents
    cy.get('.fa.fa-arrow-circle-left').click()
    cy.wait(1000)
    cy.get('.fa.fa-arrow-circle-left').click()
    cy.wait(1000)
    // refresh page
    cy.get('.fa.fa-refresh').click()
    cy.wait(1000)
    cy.get('li>div.resource-img-wrapper').click({ force: true })
    cy.wait(10000)
    // Chapter Content
    cy.get('[ng-if="show.relatedContent"] > a.ng-binding').click()
    cy.wait(2000)
    cy.get('i.fa-minus-circle').click()
    cy.wait(2000)
    // features
    cy.get('[ng-if="show.chapterFeatures"] > a.ng-binding').click()
    cy.wait(2000)
    // notes
    cy.get('[ng-if="show.notes"] > a.ng-binding').click()
    cy.wait(3000)
    cy.get('.text-center').click()
    cy.wait(3000)
    cy.get('#newNoteText').type('Creating New Notes By Videos')
    cy.wait(3000)
    cy.get('#newNotePanel > .right').click()
    cy.wait(3000)
    cy.get('#navBackBtn').click()
    //
    
})
})