/// <reference types="Cypress" />
import Grade from '../../support/pageObjects/Grade'
const grade = new Grade()
const grading = require('../../fixtures/Grading.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(grading.TeacherUserName,
            grading.TeacherPassword);
    }); 
    it('Grade-book',function() {
        cy.Curriculum()
        cy.wait(2000)
        grade.getGradebook()
            .click()
        cy.wait(5000)
        grade.getClass()
            .contains(grading.Class)
        grade.getSection()
            .contains(grading.Section)
        grade.getSubject()
            .contains(grading.GradeSubj)
        cy.wait(10000)    
        grade.getGradetype()
            .contains(grading.GradeType)
        cy.wait(10000)    
        cy.contains(grading.AddAssess)
            .click({force:true})
        grade.getChapter()
            .contains(grading.gradechapter)
        grade.getAssesmentName()
            .type(grading.AssessName,{force:true})
        grade.getCalender1()
            .click({force:true})
        grade.getDate()
            .contains(grading.Date1).click({force:true})
        grade.getCalender2()
            .click({force:true})
        grade.getDate()
            .contains(grading.Date2).click({force:true})
        grade.getMarks()
            .contains(grading.Marks)
        cy.contains(grading.CreateNdPush)
            .click({force:true})
    })
    it('Logout', ()=>{
        cy.Logout()
    })    
})    