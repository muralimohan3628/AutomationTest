/// <reference types="Cypress" />
import Goals from '../../support/pageObjects/Goals'
const goals = new Goals()
const goal = require('../../fixtures/Goal.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(goal.TeacherUserName,
            goal.TeacherPassword);
     }); 
    it('Goals',function() {
        cy.Curriculum()  
        goals.getGoals()
            .click()
        goals.getClass()
            .contains(goal.Class)
        goals.getSubject()
            .contains(goal.Subject)
        goals.getSection()
            .contains(goal.Section)
        cy.get('tr td:nth-child(3)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("A"))
            {
                $e1.click()
            }
        })
        goals.getGoalName()
            .type(goal.name)
        goals.getSelectGoal1()
            .contains(goal.Goal)
        goals.getSetall()
            .click({ multiple: true })
        goals.getSelectGoal2()
            .contains(goal.Goal)
        goals.getSetall()
            .click({ multiple: true })
        goals.getSelectGoal3()
            .contains(goal.Goal)
        goals.getSetall()
            .click({ multiple: true })
        goals.getsavegoal()
            .click()
        //cy.Logout()
    })       
})    