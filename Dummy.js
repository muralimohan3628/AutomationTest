/// <reference types="Cypress" />
import Grade from '../../support/pageObjects/Grade'
import 'cypress-wait-until';
const grade = new Grade()
const grading = require('../../fixtures/Grading.json')
describe('My First Test Suite', function() 
{
    it('Signin', ()=>{
      cy.intercept({
        pathname: "/user/validateUser"
      }).as("ValidateUser")
      cy.intercept({
        pathname:"/userActivity/addPageActivity"
      }).as('IndexPage')
    
      cy.Signin(grading.TeacherUserName,
                grading.TeacherPassword);
      cy.wait('@ValidateUser').then((req)=>{
        expect(req.response.statusCode).to.eq(200)
      })
      cy.wait('@IndexPage').then((req)=>{
        expect(req.response.statusCode).to.eq(200)
      })
    });
    it('Grade-book',function() {
        cy.waitUntil(() => true)
        cy.Curriculum()
        //cy.waitUntil(() => true)
        grade.getGradebook()
            .click()
        cy.waitUntil(() => true)
        grade.getClass()
            .contains(grading.Class)
        cy.waitUntil(() => true)
        grade.getSection()
            .contains(grading.Section)
        cy.waitUntil(() => true)
        grade.getSubject()
            .contains(grading.GradeSubj)
        cy.waitUntil(() => true)      
        cy.contains(grading.AddAssign)
            .click({force:true})
        cy.waitUntil(() => true)
        grade.getChapter()
            .contains(grading.gradechapter)
        cy.waitUntil(() => true)
        grade.getAssesmentName()
            .type(grading.AssessName,{force:true})
        cy.waitUntil(() => true)
        grade.getCalender1()
            .click({force:true})
        cy.waitUntil(() => true)  
        grade.getDate()
            .contains(grading.Date1).click({force:true})
        cy.waitUntil(() => true)
        grade.getCalender2()
            .click({force:true})
        cy.waitUntil(() => true)
        grade.getDate()
            .contains(grading.Date2).click({force:true})
        cy.waitUntil(() => true)
        grade.getMarks()
            .contains(grading.Marks)
        cy.waitUntil(() => true)
        cy.contains(grading.CreateNdPush)
            .click({force:true})
    })
    //it('Logout', ()=>{
    //    cy.Logout()
    //})    
})
    