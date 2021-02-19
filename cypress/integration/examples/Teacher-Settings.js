/// <reference types="Cypress" />
import Settings from '../../support/pageObjects/Settings'
const settings = new Settings()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     }); 
    it('Settings',function() {
        cy.Curriculum()
        settings.getSettings()
            .click()
        settings.getCurrentPasswd()
            .type(Constvarbl.name)
        settings.getNewPasswd()
            .type(Constvarbl.pwd)
        settings.getVerifyPasswd()
            .type(Constvarbl.pwd)
        settings.getCheckbox()
            .check()  
        settings.getSettingsCls()
            .contains(Constvarbl.Class)
        settings.getSettingsSection()
            .contains(Constvarbl.Section)
        settings.getStudntSettngs()
            .contains(Constvarbl.pwdUser)
        settings.getCancelSettings()
            .click()
        settings.getFeedbackIcon()
            .click()
        settings.getFeedback()
            .type(Constvarbl.Description)
        settings.getCancelFeedback()
            .click()
        cy.Logout()
    })    
})    