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
    it('Create Assignment',function() {
        cy.get('.icon-curriculum.dash-img').click()
        cy.wait(3000)    
    })

    it('Create Assessment',function() {
        cy.get('#dropdownAssessment').find('[ui-sref="assessmentCreate"]').click({force: true})
        cy.wait(2000)
        /*cy.get('#assessmentName').type('MuraliMohan')
        cy.wait(2000)
        cy.get('select').eq(1).select('0').contains('English')
        cy.wait(2000)
        cy.get('select').eq(2).select('0').contains('Class 10')
        cy.wait(2000)
        cy.get('select').eq(3).select('0').contains('Biology')
        cy.wait(2000)
        cy.get('select').eq(4).select('1').contains('Medium')
        cy.wait(2000)
        cy.get('select').eq(5).select('0').contains('5 mins')
        cy.wait(2000)
        cy.get('select').eq(6).select('0').contains('5')
        cy.wait(2000) */
        cy.get('#dropdownAssessment').find('li > [ui-sref="assessmentList"]').click({force: true})
        cy.wait(2000)
        cy.get('select').eq(1).select('0').contains('Class 10')
        cy.wait(2000)
        cy.get('select').eq(2).select('0').contains('Biology')
        cy.wait(2000)
        cy.get('select').eq(3).select('1').contains('2 . Respiration-the Energy Releasing System (శ్వాసక్రియ-శక్తి ఉత్పాదక వ్యవస్థ)')
        cy.wait(2000)
        cy.get('select').eq(4).select('0').contains('Created Date')
        cy.wait(2000)
        cy.get('.fa.fa-calendar').click({ multiple: true })
        cy.wait(2000)
        cy.get('.fa.fa-calendar').click({ multiple: true })
        cy.wait(2000)
        cy.get('[ng-show="show.unpushed"]').click()
        cy.wait(2000)
    })    

    it('Logout test',function() {
        //cy.wait(5000)
        cy.get('.fa.fa-power-off').click()

    })    
    
})    