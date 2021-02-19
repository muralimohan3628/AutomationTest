/// <reference types="Cypress" />
import Grade from '../../support/pageObjects/Grade'
const grade = new Grade()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
    }); 
    it('Grade-book',function() {
        cy.Curriculum()
        cy.wait(2000)
        grade.getGradebook()
            .click()
        grade.getClass()
            .contains(Constvarbl.Class)
        grade.getSection()
            .contains(Constvarbl.Section)
        grade.getSubject()
            .contains(Constvarbl.GradeSubj)
        grade.getGradetype()
            .contains(Constvarbl.GradeType)
        cy.contains(Constvarbl.AddAssess)
            .click()
        grade.getChapter()
            .contains(Constvarbl.gradechapter)
        grade.getAssesmentName()
            .type(Constvarbl.AssessName)
        grade.getCalender1()
            .click()
        grade.getDate()
            .contains(Constvarbl.Date1).click()
        grade.getCalender2()
            .click()
        grade.getDate()
            .contains(Constvarbl.Date2).click()
        grade.getMarks()
            .contains(Constvarbl.Marks)
        cy.contains(Constvarbl.CreateNdPush)
            .click()
        cy.Logout()
    })    
})    