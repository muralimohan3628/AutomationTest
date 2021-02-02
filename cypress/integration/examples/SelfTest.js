/// <reference types="Cypress" />
import { Assertion } from 'chai'
import Assessments from'../../support/pageObjects/Assessments'
describe('My First Test Suite', function() 
{
    before(function() {
        cy.fixture('example').then(function(data) {
                this.data=data  })
      })

it('Login Test case',function() {

    const Assessment = new Assessments()
    cy.visit(this.data.URL)
    // login
    Assessment.getusername().type(this.data.Username)
    Assessment.getpassword().type(this.data.Password)
    Assessment.getSignin().click({multiple: true})
    
    cy.get('.success').click()
})

it('opening Assessments ',function() {    
    const Assessment = new Assessments()
    cy.wait(2000)
    Assessment.getAssessmentsTab().click({ multiple: true })
    cy.wait(2000)
    Assessment.getAssesmentSubject().click()    
})

it('Creating Assessments',function() {
    const Assessment = new Assessments()
    Assessment.getCreateNewAssesment().click()
    Assessment.getAssessmentsName().type('Practical Exam New')

    // Multiple DropDowns at same place
    Assessment.getDropdown().eq(2).select('6').contains('7. Bacteria')
    cy.wait(2000)
    Assessment.getDropdown().eq(3).select('0').contains('5')
    Assessment.getCreateAssessment().click()
    cy.wait(2000)
})

it('Taking the Assessment Exam ',function() {
    const Assessment = new Assessments()
    Assessment.getAssessmentOption1().check({force: true}).should('be.checked')
    Assessment.getMarkForReviewandNext().click()
    
    Assessment.getAssessmentOption2().check({force: true}).should('be.checked')
    Assessment.getSaveandMarkForReview().click()

    Assessment.getAssessmentOption3().check({force: true}).should('be.checked')
    Assessment.getSaveandNext().click()

    Assessment.getAssessmentOption4().check({force: true}).should('be.checked')
    Assessment.getMarkForReviewandNext().click()
    /*cy.get('#option_2').check({force: true}).should('be.checked')
    cy.wait(5000)
    cy.contains('Mark For Review & Next').click()
    */
    Assessment.getSubmitTest().click()
    cy.wait(2000)
    
        cy.get('.success').click()
})

it('opening Assessments Test case',function() {    
    // going back to Assessments dashboard
    const Assessment = new Assessments()
    cy.wait(3000)
    Assessment.getBackbutton().click()
    // opening assesments from dashboard
    cy.wait(3000)
    cy.contains('Practical Exam New').click()  // oprning test from assessment dashboard

})

it('Assessing All questions Tabs',function() {    

    const Assessment = new Assessments()
    Assessment.getAllTab().click()
    cy.wait(2500)

    Assessment.getCorrectTab().click({force: true})
    cy.wait(2500)

    Assessment.getIncorrectTab().click({force: true})
    cy.wait(2500)

    Assessment.getNotAttemptedTab().click({force: true})
    cy.wait(2500)

})


it('Sum of all', function(){
    // adding all questions to equal the total no of questions attempted
    const Assessment = new Assessments()
    var sum = 0
    Assessment.getSumofIncorrect().each(($el) => {

        const all=$el.text()
        var res= all.split(" ")
        res= res[2].trim('').replace("Incorrect(","").replace(")","");
        sum= Number(sum)+Number(res)

    }).then(function()
    {
        cy.log(sum)
    })
    Assessment.getSumofCorrect().each(($el) => {

        const all=$el.text()
        var res= all.split(" ")
        res= res[2].trim('').replace("Correct(","").replace(")","");
        sum= Number(sum)+Number(res)

    }).then(function()
    {
        cy.log(sum)
    })
    Assessment.getSumofNotAttempted().each(($el) => {

        const all=$el.text()
        var res= all.split(" ")
        res= res[3].trim('').replace("Attempted(","").replace(")","");
        sum= Number(sum)+Number(res)
        
    }).then(function()
    {
        cy.log(sum)
    })
    Assessment.getSumofMarked().each(($el) => {

        const all=$el.text()
        var res= all.split(" ")
        res= res[3].trim('').replace("Marked(","").replace(")","");
        sum= Number(sum)+Number(res)
        
    }).then(function()
    {
        cy.log(sum)
    })

    Assessment.getSumofAll().then(function(e1)
    {
        const allqstns=e1.text()
        var res= allqstns.split(" ")
        var total = res[2].trim().replace("All(","").replace(")","")
        expect(Number(total)).to.equal(sum)
        cy.log(total)
    })

})
it('Logout test',function() {
    cy.get('.fa.fa-power-off').click()

})
})