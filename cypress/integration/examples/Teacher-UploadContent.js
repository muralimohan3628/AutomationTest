/// <reference types="Cypress" />
import Upload from '../../support/pageObjects/Upload'
const upload = new Upload()
const Constvarbl = require('../../fixtures/ConstVarbl.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
        cy.Signin(Constvarbl.TeacherUserName,
            Constvarbl.TeacherPassword);
     });        
    it('Upload content',function() {
        cy.Curriculum()
        upload.getUploadContent()
            .click()
        upload.getContentName()
            .type(Constvarbl.Content)
        upload.getClass()
            .contains(Constvarbl.ContentCls)
        upload.getSubject()
            .contains(Constvarbl.Subject)
        upload.getChapter()
            .contains(Constvarbl.ContentChpter)
        cy.wait(1000)    
        upload.getTopics()
            .contains(Constvarbl.ContentTopic)
                .click({force: true})
        cy.wait(1000)
        upload.getTopics()
            .contains(Constvarbl.ContentSubTopic)
                .click({force: true})
        upload.getDescription()
            .type(Constvarbl.Content)
        upload.getConcept()
            .type(Constvarbl.Content)
        upload.getCheckbox()
            .check()
                .should('be.checked')  
        cy.Logout()
    })    
})    