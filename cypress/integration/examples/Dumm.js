/*
Author: Murali
*/
/// <reference types="Cypress" />
import TeacherAssess from '../../support/pageObjects/TeacherAssess'
const Assessment = new TeacherAssess()
const assess = require('../../fixtures/Assessment.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(assess.TeacherUserName,
            assess.TeacherPassword);
     }); 
    it('Create Assessment Use Pre-Mode',function() {
        cy.Curriculum()
        Assessment.getCreateAssessment()
            .click({force: true})
        Assessment.getAssessmentName()
            .type(assess.name)
        Assessment.getLanguage()
            .contains(assess.Language)
        Assessment.getClass()
            .contains(assess.Class)
        Assessment.getSubject()
            .contains(assess.Subject)
        cy.wait(1000)    
        Assessment.getLevelDifficulty()
            .contains(assess.Difficulty)
        cy.wait(1000)    
        Assessment.getDuration()
            .contains(assess.Duration)
        Assessment.getMarks()
            .contains(assess.Marks)
        cy.contains(assess.usepremode)
            .click()
        Assessment.getName()
            .type(assess.name)
        Assessment.getLevel()
            .contains(assess.Level)
        Assessment.getOwner()
            .contains(assess.Owner)
        Assessment.getAssessDate()
            .contains('Created Date')
        Assessment.getCalender1()
            .click()
        Assessment.getDate()
            .contains('15')
                .click()    
        Assessment.getCalender2()
            .click()
        Assessment.getDate()
            .contains('15')
                .click()
        Assessment.getSelectButton()
            .click({force:true})
    })
    it('Create Assessment Select Questions',function() {
        Assessment.getSelectQstns()
            .click()
        Assessment.getChapter()
            .contains(assess.chaptr1)
        Assessment.getTopic()
            .contains(assess.topic)
        Assessment.getDifficulty()
            .contains(assess.difficulty)
        Assessment.getSkillType()
            .contains(assess.Skill)
        Assessment.getPastExam()
            .contains(assess.exam)
        Assessment.getExamYear()
            .contains(assess.year)
        Assessment.getquestiontype()
            .contains(assess.typeqstn)
        Assessment.getDescription()
            .type(assess.Description)
        Assessment.getConcepttype()
            .type(assess.concept)
        Assessment.getAddquestion()
            .click({ force: true })
        Assessment.getviewqustn()
            .click({force:true})
        Assessment.getcloseDialog()
            .click()
        Assessment.getAddquestion2()
            .click({ force: true })
        Assessment.getAddquestion3()
            .click({ force: true })
        Assessment.getOkay()
            .click({force: true})
        Assessment.getCreateandPush()
            .click({force: true})
        Assessment.getCheckbox()
            .check()
                .should('be.checked')
        Assessment.getStartCalender()
            .click()
        Assessment.getActiveDate(assess.pushDate1)
            .click();
        Assessment.getCalenderHour(assess.pushHour1)
            .click();
        Assessment.getCalenderMinute(assess.pushMin1)
            .click();        
        Assessment.getEndCalender()
            .click()
        Assessment.getActiveDate(assess.pushDate2)
            .click();
        Assessment.getCalenderHour(assess.pushHour2)
            .click();
        Assessment.getCalenderMinute(assess.pushMin2)
            .click();
        Assessment.getCancel()
            .click()
    })    
    it('Create Assessment Auto Select Questions',function() {
        Assessment.getAssessmentName()
            .type(assess.name)
        Assessment.getLanguage()
            .contains(assess.Language)
        Assessment.getClass()
            .contains(assess.Class)
        Assessment.getSubject()
            .contains(assess.Subject)
        Assessment.getLevelDifficulty()
            .contains(assess.Difficulty)
        Assessment.getDuration()
            .contains(assess.Duration)
        Assessment.getMarks()
            .contains(assess.Marks)
        cy.contains(assess.AutoSelectquestions)
            .click()
        Assessment.getquestions()
            .contains(assess.questions)
        Assessment.getAutoselectChapter1()
            .contains(assess.selectChpter)
                .click()
        Assessment.getAutoselectChapter2()
            .contains(assess.selectChpter1)
                .click()
        Assessment.getAutoquestions()
            .click()
        cy.wait(3000)    
        Assessment.getCreateNdPush()
            .click({force: true})
        Assessment.getCheckbox()
            .check()
                .should('be.checked')
        Assessment.getStartCalender()
                .click()
        Assessment.getActiveDate(assess.pushDate1)
                .click();
        Assessment.getCalenderHour(assess.pushHour1)
                .click();
        Assessment.getCalenderMinute(assess.pushMin1)
                .click();        
        Assessment.getEndCalender()
                .click()
        Assessment.getActiveDate(assess.pushDate2)
                .click();
        Assessment.getCalenderHour(assess.pushHour2)
                .click();
        Assessment.getCalenderMinute(assess.pushMin2)
                .click();
        Assessment.getCancel()
            .click()
    })
    it('View Assessments',function(){
        Assessment.getViewAssessment()
            .click({force: true})
        Assessment.getViewClass()
            .contains(assess.Class)
        Assessment.getViewSubject()
            .contains(assess.subject)
        Assessment.getViewChapter()
            .contains(assess.chapter)
        Assessment.getViewDate()
            .contains(assess.CreatedDate)
        Assessment.getCalender1()
            .click()
        Assessment.getDate()
            .contains(assess.Date1)
                .click()    
        Assessment.getCalender2()
            .click()
        Assessment.getDate()
            .contains(assess.Date2)
                .click()
        Assessment.getPushedAssessment()
            .click()
        Assessment.getPushedContent().each(($e1,index,$list)=>{
            const text = $e1.text()
            if(text.includes("English"))
            {
                $e1.click()
            }
        })
        Assessment.getBack()
            .click()
        cy.Logout()
    })    
})