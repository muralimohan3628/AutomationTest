/// <reference types="Cypress" />
import LessonPlan from '../../support/pageObjects/LessonPlan'
const lessonplan = new LessonPlan()
const lesson = require('../../fixtures/Lesson.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(lesson.TeacherUserName,
            lesson.TeacherPassword);
     }); 
    it('Create Lesson Plan',function() {  
        cy.Curriculum()
        lessonplan.getCreateLesson()
            .click({force: true})
        lessonplan.getLanguage()
            .contains(lesson.Language)
        lessonplan.getClass()
            .contains(lesson.Class)
        lessonplan.getSubject()
            .contains(lesson.Subject1)
        lessonplan.getChapter()
            .contains(lesson.Chapter1)
        cy.wait(2000)    
        lessonplan.getTopic()
            .contains(lesson.Topic1)
                .click({force: true})
        cy.contains(lesson.Lessonplan)
            .click()
        lessonplan.getCalender1()
            .click()
        lessonplan.getDate()
            .contains(lesson.Date1)
                .click()
        lessonplan.getCalender2()
            .click()
        lessonplan.getDate()
            .contains(lesson.Date2)
                .click()
        cy.contains('Resources')
            .click({force: true})
        cy.contains('Prior Knowledge')
            .click({force: true})
        cy.contains('Introduction')
            .click({force: true})
        lessonplan.getEditNotes()
            .click()
        lessonplan.getcancelDialog()
            .click()
        cy.contains(lesson.AddRemove)
            .click()
        lessonplan.getAddMultimeddia()
            .click()
        cy.contains('Chapter 4')
            .click()
        lessonplan.getcloseDialog()
            .click({force: true})
        lessonplan.getExternalLink()
            .click()
        lessonplan.getLinkname()
            .type(lesson.Organisation)
        lessonplan.getURL()
            .type(lesson.URL)
        lessonplan.getcloseDialog()
            .click({force: true})
        lessonplan.getcancelDialog()
            .click({force: true})
        lessonplan.getCreateLessonPlan()
            .click()
    })
    it('View Lesson Plan',function() {
        lessonplan.getViewLessonPlan()
            .click({force: true})
            cy.wait(2000)
        lessonplan.getViewClass()
            .contains(lesson.Class)
        lessonplan.getViewsubject()
            .contains(lesson.Subject1)
        lessonplan.getViewchapter()
            .contains(lesson.chapter1)
            cy.wait(2000)
        lessonplan.getViewdate()
            .contains(lesson.StartDate)
        lessonplan.getCalender1()
            .click()
        lessonplan.getDate()
            .contains(lesson.Date1).click()
        lessonplan.getCalender2()
            .click()
        lessonplan.getDate()
            .contains(lesson.Date2)
                .click()
        cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("English"))
            {
                $e1.click()
            }
        })
        cy.wait(2000)
        cy.contains(lesson.LessonDelivery)
            .click({force: true})
            cy.wait(2000)
        cy.contains(lesson.LessonClosure)
            .click({force: true})
            cy.wait(2000)
        cy.contains(lesson.LearningObjectives)
            .click({force: true})
            cy.wait(2000)
        lessonplan.getEditLesson()
            .click()
            cy.wait(2000)
        lessonplan.getViewBack()
            .click()
            cy.wait(2000)
        lessonplan.getViewBack()
            .click()
        cy.Logout()
    })    
})    