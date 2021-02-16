/// <reference types="Cypress" />
import DataEntry from '../../support/pageObjects/DataEntry'
const Dataentry = require('../../fixtures/DatEntry.json')
const DEntry = new DataEntry()
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Dataentry.Username,
            Dataentry.Password);
     });
    it('Create Assessment ',function() {        
        DEntry.getCreateAssessment().click({force: true})
        DEntry.getAssessmentName().type('New 1')
        DEntry.getType().contains('Regular')
        DEntry.getCurriculam().contains('Cbse-English')
        DEntry.getGrade().contains('Class 11')
        DEntry.getSubject().contains('Biology')
        DEntry.getLevel().contains('Easy')
        DEntry.getDuration().clear()
        DEntry.getDuration().type('5')
        DEntry.getMarks().clear()
        DEntry.getMarks().type('5')
        DEntry.getSelectquestions().click()
        cy.wait(7000)
        DEntry.getChapter().contains('1. The Living World')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        DEntry.getTopic().contains('2. Nomenclature')  
        DEntry.getDifficulty().contains('Easy')
        DEntry.getSkillType().contains('Knowledge')
        DEntry.getPastexam().contains('IIT')
        DEntry.getExamyear().contains('2021')
        DEntry.getQstntype().contains('MCQ(Single Answer)')
        DEntry.getDescript().type('New')
        DEntry.getConcept().type('New')
        DEntry.getAddquestion1().click({ force: true })
        DEntry.getAddquestion2().click({ force: true })
        DEntry.getAddquestion3().click({ force: true })
        DEntry.getAddquestion4().click({ force: true })
        DEntry.getAddquestion5().click({ force: true })
        DEntry.getOK().click({force:true})
        cy.wait(2500)
        //DEntry.getDeleteqstn().click()
        //DEntry.getSuccess().click()
        DEntry.getAddNew().click()
    })
    it('Add Questions ',function() {
        DEntry.getCurriculamAdd().contains('Cbse-English')
        DEntry.getGradeAdd().contains('Class 11')
        DEntry.getSubjectAdd().contains('Biology')
        DEntry.getChapterAdd().contains('1. The Living World')
        DEntry.getTopicAdd().contains('2. Nomenclature')
        DEntry.getDifficultAdd().contains('Easy')
        DEntry.getSkillTypeAdd().contains('Knowledge')
        DEntry.getQstntypeAdd().contains('Numerical Value')
    })    
})    