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
    it('Curriculum',function() {
        cy.get('.icon-curriculum.dash-img').click()
        cy.wait(3000)    
    })

    it('Grade-book',function() {
        cy.get('.grade-book').click()
    })    

    it('Logout test',function() {
        cy.get('.fa-power-off').click({force: true})
    })    
    
})    