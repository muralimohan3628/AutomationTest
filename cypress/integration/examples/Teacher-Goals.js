/// <reference types="Cypress" />
import Goals from '../../support/pageObjects/Goals'
const goals = new Goals()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     }); 
    it('Goals',function() {
        cy.Curriculum()  
        goals.getGoals()
            .click()
        goals.getClass()
            .contains(Constvarbl.Class)
        goals.getSubject()
            .contains(Constvarbl.Subject)
        goals.getSection()
            .contains(Constvarbl.Section)
        cy.get('tr td:nth-child(3)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("A"))
            {
                $e1.click()
            }
        })
        goals.getGoalName()
            .type(Constvarbl.name)
        goals.getSelectGoal1()
            .contains(Constvarbl.Goal1)
        goals.getSetall()
            .click({ multiple: true })
        goals.getSelectGoal2()
            .contains(Constvarbl.Goal2)
        goals.getSetall()
            .click({ multiple: true })
        goals.getSelectGoal3()
            .contains(Constvarbl.Goal3)
        goals.getSetall()
            .click({ multiple: true })
        goals.getsavegoal()
            .click()
        cy.Logout()
    })       
})    