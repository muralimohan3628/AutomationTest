/// <reference types="Cypress" />
import DataEntry from '../../support/pageObjects/DataEntry'
describe('My First Test Suite', function() 
{
    beforeEach(function() {
        cy.fixture('DataEntry').then(function(data) {
                this.data=data  })
      })

    it('Login ',function() {   
        const DEntry = new DataEntry() 
        cy.visit(this.data.URL)
        // login
        DEntry.getusername().type(this.data.UsrName)
        DEntry.getpassword().type(this.data.Paswd)
        DEntry.getSignin().click({multiple: true})
        DEntry.getSuccess().click()        
        
    })
    it('Create Assessment Use Pre-Made',function() {
        const DEntry = new DataEntry()
        DEntry.getCurriculamTab().click()
        DEntry.getCreateAssess().click({force: true})
        DEntry.getAssessmentName().type(this.data.name)
        DEntry.getAssessLanguage().contains(this.data.Lang)
        DEntry.getAssessClass().contains(this.data.Class)
        DEntry.getAssessSubj().contains(this.data.Subject)
        DEntry.getAssessDifficulty().contains(this.data.Level)
        DEntry.getAssessTime().contains(this.data.Duration) 
        DEntry.getAssessMarks().contains(this.data.Marks)
        cy.contains(this.data.usepremode).click()
        DEntry.getName().type(this.data.name)
        DEntry.getAssessLevel().contains(this.data.Level)
        DEntry.getAssessOwner().contains(this.data.Owner)
        DEntry.getAssessDate().contains(this.data.CreatedDate)
        DEntry.getCalender1().click()
        DEntry.getDate().contains(this.data.Date1).click()    
        DEntry.getCalender2().click()
        DEntry.getDate().contains(this.data.Date1).click()
        DEntry.getSelectButton().click({force:true})
        DEntry.getSelectquestions().click()
        DEntry.getAddquestion3().click({force: true})
        DEntry.getOK().click()
        DEntry.getCreateNdPush().click({force: true})
        DEntry.getCheckbox().check().should('be.checked')
        DEntry.getPushCalender1().click()
        DEntry.getDateandTime().contains(this.data.pushDate1).click()
        DEntry.getCalenderHour().contains(this.data.pushHour1).click()
        DEntry.getCalenderMinute().contains(this.data.pushMin1).click()

        DEntry.getPushCalender2().click()
        DEntry.getDateandTime1().contains(this.data.pushDate2).click()
        DEntry.getCalenderHour1().contains(this.data.pushHour2).click()
        DEntry.getCalenderMinute1().contains(this.data.pushMin2).click()
        //DEntry.getCancel().click()
        DEntry.getSubmitPush().click()
    })
})