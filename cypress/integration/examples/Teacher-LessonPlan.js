/// <reference types="Cypress" />
import LessonPlan from '../../support/pageObjects/LessonPlan'
const lessonplan = new LessonPlan()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     }); 
    it('Create Lesson Plan',function() {  
        cy.Curriculum()
        lessonplan.getCreateLesson()
            .click({force: true})
        lessonplan.getLanguage()
            .contains(Constvarbl.Language)
        lessonplan.getClass()
            .contains(Constvarbl.Class)
        lessonplan.getSubject()
            .contains(Constvarbl.Subject1)
        lessonplan.getChapter()
            .contains(Constvarbl.Chapter1)
        cy.wait(2000)    
        lessonplan.getTopic()
            .contains(Constvarbl.Topic1)
                .click({force: true})
        cy.contains(Constvarbl.Lessonplan)
            .click()
        lessonplan.getCalender1()
            .click()
        lessonplan.getDate()
            .contains(Constvarbl.Date1)
                .click()
        lessonplan.getCalender2()
            .click()
        lessonplan.getDate()
            .contains(Constvarbl.Date2)
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
        cy.contains(Constvarbl.AddRemove)
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
            .type(Constvarbl.Organisation)
        lessonplan.getURL()
            .type(Constvarbl.URL)
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
        lessonplan.getViewClass()
            .contains(Constvarbl.Class)
        lessonplan.getViewsubject()
            .contains(Constvarbl.Subject1)
        lessonplan.getViewchapter()
            .contains(Constvarbl.chapter1)
        lessonplan.getViewdate()
            .contains(Constvarbl.StartDate)
        lessonplan.getCalender1()
            .click()
        lessonplan.getDate()
            .contains(Constvarbl.Date1).click()
        lessonplan.getCalender2()
            .click()
        lessonplan.getDate()
            .contains(Constvarbl.Date2)
                .click()
        cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("English"))
            {
                $e1.click()
            }
        })
        cy.contains('Lesson Delivery')
            .click({force: true})
        cy.contains('Lesson Closure')
            .click({force: true})
        cy.contains('Learning Objectives')
            .click({force: true})
        lessonplan.getEditLesson()
            .click()
        lessonplan.getViewBack()
            .click()
        lessonplan.getViewBack()
            .click()
        cy.Logout()
    })    
})    