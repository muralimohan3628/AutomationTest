/// <reference types="Cypress" />
import EntranceExam from '../../support/pageObjects/EntanceExm'
const entrance = new EntranceExam()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     }); 
    it('EntranceExamPractise',function() {
        cy.Curriculum()
        entrance.getEntranceExam()
            .click()
        entrance.getSubPhysics()
            .click()
        entrance.getSubMathematics()
            .click()
        entrance.getExamChapter()
            .contains(Constvarbl.EntrancChpter)
        entrance.getExamConcepts()
            .click()
        cy.contains(Constvarbl.RelatedChapter)
            .click()
        cy.contains('>')
            .click({force: true})// next pdf page
        cy.contains('+')
            .click({force: true})
        cy.contains('Fit Page')
            .click()
        entrance.getNavigateback()
            .click()
        cy.Logout()
    })
})    