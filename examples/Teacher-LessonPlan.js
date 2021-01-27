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

    it('Lesson Plan',function() {
        cy.get('.icon-curriculum.dash-img').click()
        cy.get('#dropdownLessonPlan').find('[ui-sref="lessonPlanCreate"]').click({force: true})
        cy.wait(2000)
        cy.get('select').eq(1).select('1').contains('తెలుగు')
        cy.wait(2000)
        cy.get('select').eq(2).select('0').contains('Class 10')
        cy.wait(2000)
        cy.get('select').eq(3).select('1').contains('English')
        cy.wait(2000)
        cy.get('select').eq(4).select('3').contains('4. Films And Theatre')
        cy.wait(2000)
        cy.get('ul li.option').contains('6. Modals').click({force: true})
        cy.wait(2000)
        cy.contains('Start Lesson Plan Wizard').click()
        cy.wait(2000)
        cy.get('.fa.fa-calendar').click({ multiple: true })
        cy.wait(2000)
        cy.get('.fa.fa-calendar').click({ multiple: true })
        cy.wait(2000)
        cy.contains('Resources').click({force: true})
        cy.contains('Prior Knowledge').click({force: true})
        cy.contains('Introduction').click({force: true})
        cy.contains('Lesson Delivery').click({force: true})
        cy.get('.fa.fa-pencil').click()
        cy.wait(2000)
        cy.get('[ng-click="cancelDialog()"]').click()
        cy.wait(2000)
        cy.contains('Add/Remove').click()
        cy.wait(2000)
        cy.get('[ng-click="cancelDialog()"]').click()
        cy.wait(2000)
        cy.get('[ng-click="cancelPlan()"]').click()
        cy.get('#dropdownLessonPlan').find('[ui-sref="lessonPlanView"]').click({force: true})
        cy.wait(2000)
        cy.get('select').eq(1).select('0').contains('Class 10')
        cy.wait(2000)
        cy.get('select').eq(2).select('1').contains('English')
        cy.wait(2000)
        cy.get('select').eq(3).select('7').contains('8 . Human Rights')
        cy.wait(2000)
        cy.get('select').eq(4).select('0').contains('Modified Date')
        cy.wait(2000)
        cy.get('.fa-calendar').click({ multiple: true })
        cy.wait(2000)
        cy.get('.fa-calendar').click({ multiple: true })
        cy.wait(2000)
    })    

    it('Logout test',function() {
        cy.get('.fa-power-off').click({force: true})

    })    
    
})    