/// <reference types="Cypress" />
import TeacherAssess from '../../support/pageObjects/TeacherAssess'
const Assessment = new TeacherAssess()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     }); 
    it('Create Assessment Use Pre-Mode',function() {
        cy.Curriculum()
        Assessment.getCreateAssessment()
            .click({force: true})
        Assessment.getAssessmentName()
            .type(Constvarbl.name)
        Assessment.getLanguage()
            .contains(Constvarbl.Language)
        Assessment.getClass()
            .contains(Constvarbl.Class)
        Assessment.getSubject()
            .contains(Constvarbl.Subject)
        cy.wait(1000)    
        Assessment.getLevelDifficulty()
            .contains(Constvarbl.Difficulty)
        cy.wait(1000)    
        Assessment.getDuration()
            .contains(Constvarbl.Duration)
        Assessment.getMarks()
            .contains(Constvarbl.Marks)
        cy.contains(Constvarbl.usepremode)
            .click()
        Assessment.getName()
            .type(Constvarbl.name)
        Assessment.getLevel()
            .contains(Constvarbl.Level)
        Assessment.getOwner()
            .contains(Constvarbl.Owner)
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
            .contains(Constvarbl.chaptr1)
        Assessment.getTopic()
            .contains(Constvarbl.topic)
        Assessment.getDifficulty()
            .contains(Constvarbl.difficulty)
        Assessment.getSkillType()
            .contains(Constvarbl.Skill)
        Assessment.getPastExam()
            .contains(Constvarbl.exam)
        Assessment.getExamYear()
            .contains(Constvarbl.year)
        Assessment.getquestiontype()
            .contains(Constvarbl.typeqstn)
        Assessment.getDescription()
            .type(Constvarbl.Description)
        Assessment.getConcepttype()
            .type(Constvarbl.concept)
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
        Assessment.getDateandTime()
            .contains(Constvarbl.pushDate)
                .click()
        Assessment.getCalenderHour()
            .contains(Constvarbl.pushHour1)
                .click()
        Assessment.getCalenderMinute()
            .contains(Constvarbl.pushMin1)
                .click()
        Assessment.getEndCalender()
            .click()
        Assessment.getDateandTime1()
            .contains(Constvarbl.pushDate)
                .click()
        Assessment.getCalenderHour1()
            .contains(Constvarbl.pushHour2)
                .click()
        Assessment.getCalenderMinute1()
            .contains(Constvarbl.pushMin2)
                .click()
        Assessment.getCancel()
            .click()
    })    
    it('Create Assessment Auto Select Questions',function() {
        Assessment.getAssessmentName()
            .type(Constvarbl.name)
        Assessment.getLanguage()
            .contains(Constvarbl.Language)
        Assessment.getClass()
            .contains(Constvarbl.Class)
        Assessment.getSubject()
            .contains(Constvarbl.Subject)
        Assessment.getLevelDifficulty()
            .contains(Constvarbl.Difficulty)
        Assessment.getDuration()
            .contains(Constvarbl.Duration)
        Assessment.getMarks()
            .contains(Constvarbl.Marks)
        cy.contains(Constvarbl.AutoSelectquestions)
            .click()
        Assessment.getquestions()
            .contains(Constvarbl.questions)
        Assessment.getAutoselectChapter1()
            .contains(Constvarbl.selectChpter)
                .click()
        Assessment.getAutoselectChapter2()
            .contains(Constvarbl.selectChpter1)
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
        Assessment.getDateandTime()
            .contains(Constvarbl.pushDate)
                .click()
        Assessment.getCalenderHour()
            .contains(Constvarbl.pushHour1)
                .click()
        Assessment.getCalenderMinute()
            .contains(Constvarbl.pushMin1)
                .click()
        Assessment.getEndCalender()
            .click()
        Assessment.getDateandTime1()
            .contains(Constvarbl.pushDate)
                .click()
        Assessment.getCalenderHour1()
            .contains(Constvarbl.pushHour2)
                .click()
        Assessment.getCalenderMinute1()
            .contains(Constvarbl.pushMin2)
                .click()
        Assessment.getCancel()
            .click()
    })
    it('View Assessments',function(){
        Assessment.getViewAssessment()
            .click({force: true})
        Assessment.getViewClass()
            .contains(Constvarbl.Class)
        Assessment.getViewSubject()
            .contains(Constvarbl.subject)
        Assessment.getViewChapter()
            .contains(Constvarbl.chapter)
        Assessment.getViewDate()
            .contains(Constvarbl.CreatedDate)
        Assessment.getCalender1()
            .click()
        Assessment.getDate()
            .contains(Constvarbl.Date1)
                .click()    
        Assessment.getCalender2()
            .click()
        Assessment.getDate()
            .contains(Constvarbl.Date2)
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