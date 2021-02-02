/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

    it('Login Test case',function() {


        cy.visit('demo-app.erudex.com')
        // login
        cy.get('.login-form > [type="text"]').type('Yannamaneni')
        cy.wait(2000)
        cy.get('.login-form > .ng-pristine').type('Murali3628')
        cy.wait(2000)
        cy.contains('Sign In').click({multiple: true})
    
        cy.wait(2000)
        
            cy.get('.success').click()
    })
    
    it('opening Assessments Test case',function() {    
        // Assessments
        cy.wait(5000)
        cy.get('.icon-assessment.dash-img').click({ multiple: true })
        cy.wait(2000)
        cy.get('.Mathematics.2a').click()
        cy.wait(2000)
        cy.contains('New 123').click()  // oprning test from assessment dashboard

    })

    it('Assessing All questions',function() {    

        // All questions tab
        cy.get('.tabs > [heading="All(5)"] > .ng-binding').click({multiple: true})
        cy.wait(2000)
    })
    it('Assessing Incorrect questions',function() {
        // Incorrect questions
        //cy.get('.tabs > [heading="Incorrect(1)"] > .ng-binding').click()
        cy.get('.c3-target-Incorrect > .c3-shapes >.c3-shape').click({force: true})
        cy.wait(2000)
        //cy.contains('View Solution').click({force: true})
        //cy.wait(5000)
        //cy.contains('Close').click()

    })
    it('Assessing Not-Attempted questions',function() {
        // Not Attempted questions
        //cy.get('.tabs > [heading="Not Attempted(3)"] > .ng-binding').click()
        cy.get('.c3-target-Not-Attempted > .c3-shapes >.c3-shape').click({force: true})
        cy.wait(2000)
        //cy.contains('View Solution').click({force: true})

        // viewing solutuin of 3rd question in 
        //cy.get('.active> [tab-content-transclude="tab"] > .with-ques > .half-width > :nth-child(7) > #qwn-3 > tbody >[ng-show="!isMauritiusBuild"] > td > .primary').click({force: true})
        //cy.wait(5000)
        //cy.contains('Close').click()
        
        //cy.get('#navBackBtn').click()
    })

it('Sum of all', function(){

    // adding all questions to equal the total no of questions attempted

    var sum = 0
    cy.get('dd.ng-isolate-scope:nth-child(2)').each(($el, index, $list) => {

        //cy.log($el.text())
        const all=$el.text()
        var res= all.split(" ")
        res= res[2].trim('').replace("Incorrect(","").replace(")","");
        sum= Number(sum)+Number(res)
        //cy.log(sum)

    }).then(function()
    {
        cy.log(sum)
    })
    cy.get('dd.ng-isolate-scope:nth-child(3)').each(($el, index, $list) => {

        //cy.log($el.text())
        const all=$el.text()
        var res= all.split(" ")
        res= res[2].trim('').replace("Correct(","").replace(")","");
        sum= Number(sum)+Number(res)
        //cy.log(sum)

    }).then(function()
    {
        cy.log(sum)
    })
    cy.get('dd.ng-isolate-scope:nth-child(4)').each(($el, index, $list) => {

        //cy.log($el.text())
        const all=$el.text()
        var res= all.split(" ")
        res= res[3].trim('').replace("Attempted(","").replace(")","");
        sum= Number(sum)+Number(res)
        //cy.log(sum)

    }).then(function()
    {
        cy.log(sum)
    })
    cy.get('dd.ng-isolate-scope:nth-child(5)').each(($el, index, $list) => {

        //cy.log($el.text())
        const all=$el.text()
        var res= all.split(" ")
        res= res[3].trim('').replace("Marked(","").replace(")","");
        sum= Number(sum)+Number(res)
        //cy.log(sum)

    }).then(function()
    {
        cy.log(sum)
    })

    cy.get('dd.ng-isolate-scope:nth-child(1)').then(function(e1)
    {

        const allqstns=e1.text()
        var res= allqstns.split(" ")
        var total = res[2].trim().replace("All(","").replace(")","")
        expect(Number(total)).to.equal(sum)
        cy.log(total)

    })

})

    it('Logout test',function() {
        //cy.wait(5000)
        cy.get('.fa.fa-power-off').click()

    })
    
    
    
})
