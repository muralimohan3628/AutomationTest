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
    
    it('Goals',function() {
        cy.get('.icon-curriculum.dash-img').click()
        cy.wait(3000)
        cy.get('.goals').click()
        cy.get('select').eq(1).select('0').contains('Class 10')
        cy.wait(2000)
        cy.get('select').eq(2).select('0').contains('Biology')
        cy.wait(2000)
        cy.get('select').eq(3).select('0').contains('A')
        cy.wait(2000)
        cy.get('tr td:nth-child(3)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("A"))
            {
                $e1.click()
            }
        })
        cy.get('[type="text"]').type('ABCD')
        cy.get('select').eq(4).select('2').contains('Low(40%-60%)')
        cy.wait(2000)
        cy.get('.set-all-btn').click({ multiple: true })
        cy.wait(2000)
        cy.get('select').eq(5).select('1').contains('Medium(61%-80%)')
        cy.wait(2000)
        cy.get('.set-all-btn').click({ multiple: true })
        cy.wait(2000)
        cy.get('select').eq(6).select('0').contains('Hgih(80%-100%)')
        cy.wait(2000)
        cy.get('.set-all-btn').click({ multiple: true })
        cy.wait(2000)
        cy.get('[ng-click="saveGoals()"]').click()
    })    

    it('Logout test',function() {
        cy.get('.fa-power-off').click({force: true})
    })    
    
})    