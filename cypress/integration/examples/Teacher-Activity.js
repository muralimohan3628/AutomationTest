/// <reference types="Cypress" />
import Activity from '../../support/pageObjects/Activity'
const activity = new Activity()
const Activ = require('../../fixtures/Activity.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Activ.TeacherUserName,
            Activ.TeacherPassword);
     });
     it('Create Activity',function() {
        cy.Curriculum()
        activity.getCreateActivity()
            .click({force: true})
        activity.getName()
            .type(Activ.name)
        activity.getClass()
            .contains(Activ.Class)
        activity.getSubject()
            .contains(Activ.Subject)
        activity.getChapter()
            .contains(Activ.Chapter)
        cy.wait(2000)
        activity.getSubjectTopics()
            .contains(Activ.Topic)
                .click({force: true})    
        activity.getSubjectTopics()
            .contains(Activ.SubTopic)
                .click({force: true})
        activity.getDescription()
            .type(Activ.Description)
        activity.getCreateActivtyPush()
            .click({force: true})
        activity.getCheckbox()
            .check()
                .should('be.checked')
        //cy.get('[ng-click="cancelPush()"]').click()
        activity.getStartCalender()
                .click()
        activity.getActiveDate(Activ.pushDate1)
                .click()
        activity.getCalenderHour(Activ.pushHour1)
                .click()
        activity.getCalenderMinute(Activ.pushMin1)
                .click()        
        activity.getEndCalender()
                .click()
        activity.getActiveDate(Activ.pushDate2)
                .click()
        activity.getCalenderHour(Activ.pushHour2)
                .click()
        activity.getCalenderMinute(Activ.pushMin2)
                .click()
        activity.getCancel()
            .click()
    })
    it('View Activity',function() {    
        activity.getViewActivity()
            .click({force: true})
        activity.getClass()
            .contains(Activ.Class)
        activity.getSubject()
            .contains(Activ.Subject)
        activity.getChapter()
            .contains(Activ.Chapter)
        activity.getSelectDate()
            .contains(Activ.CreatedDate)
        activity.getCalender1()
            .click()
        activity.getDate()
            .contains(Activ.Date1)
                .click()
        activity.getCalender2()
            .click()
        activity.getDate()
            .contains(Activ.Date2)
                .click()
        activity.getPushedButton()
            .click()
        activity.getActivityPushedTable().each(($e1,index,$list)=>{
            const text = $e1.text()
                if(text.includes("Activity Test"))
                {
                    $e1.click()
                }
        })
        activity.getBack()
            .click()
        cy.Logout()
    })
})    