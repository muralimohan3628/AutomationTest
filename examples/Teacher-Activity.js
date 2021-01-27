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
    it('Create Activity',function() {
        cy.get('.icon-curriculum.dash-img').click()
        cy.wait(1000)
        cy.get('#dropdownActivity').find('li > [ui-sref="activityCreate"]').click({force: true})
        cy.wait(2000)
        cy.get('#txtAssignmentName').type('MuraliMohan')
        cy.wait(2000)
        cy.get('select').eq(1).select('0').contains('Class 10')
        cy.wait(2000)
        cy.get('select').eq(2).select('1').contains('English')
        cy.wait(2000)
        cy.get('select').eq(3).select('3').contains('4 . Films And Theatre')
        cy.wait(2000)
        cy.get('ul li.option').contains('3 . Prepositions').click({force: true})
        cy.wait(2000)
        cy.get('ul li.option').contains('2 . Preposition For Time').click({force: true})
        cy.wait(2000)
        cy.get('.cke_contents').type('Description is mandatory')
        cy.wait(2000)
        cy.get('[ng-click="saveAndPush()"]').click()
        cy.wait(3000)
        cy.get('#dropdownActivity').find('li > [ui-sref="activityView"]').click({force: true})
        cy.get('select').eq(1).select('0').contains('Class 10')
        cy.wait(2000)
        cy.get('select').eq(2).select('1').contains('English')
        cy.wait(2000)
        cy.get('select').eq(3).select('3').contains('4 . Films And Theatre')
        cy.wait(2000)
        cy.get('select').eq(4).select('0').contains('Start Date')
        cy.wait(2000)
        cy.get('.fa.fa-calendar').click({ multiple: true })
        cy.wait(2000)
        cy.get('.fa.fa-calendar').click({ multiple: true })
        cy.wait(2000)
        cy.get('[ng-click="showUnPushedAssignments()"]').click()
        cy.wait(2000)
    })
})    