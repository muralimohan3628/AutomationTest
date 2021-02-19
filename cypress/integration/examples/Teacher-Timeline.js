/// <reference types="Cypress" />
import Timeline from '../../support/pageObjects/Timeline'
const timeline = new Timeline()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     }); 
    it('Timeline',function() {
        cy.Curriculum()
        timeline.getTimeline()
            .click()
        timeline.getLastweek()
            .click()
        timeline.getThisMonth()
            .click()
        timeline.getnext()
            .click()
        timeline.getprevious()
            .click()
        timeline.getThisweek()
            .click()    
        cy.Logout()
    })    
})    