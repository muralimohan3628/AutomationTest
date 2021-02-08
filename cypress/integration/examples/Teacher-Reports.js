/// <reference types="Cypress" />
import Teacherobj from '../../support/pageObjects/Teacherobj'

describe('My First Test Suite', function() 
{
    beforeEach(function() {
        cy.fixture('ConstVarbl').then(function(data) {
                this.data=data  })
      })

    it('Login ',function() {    
        const TeacherOBJ = new Teacherobj()
        cy.visit(this.data.URL)
        // login
        TeacherOBJ.getusername().type(this.data.TeacherUserName)
        TeacherOBJ.getpassword().type(this.data.TeacherPassword)
        TeacherOBJ.getSignin().click({multiple: true})
        TeacherOBJ.getSuccess().click()        
        
    })
   it('Teacher Student Reports',function() {

        const TeacherOBJ = new Teacherobj()
    // curriculam tab
        TeacherOBJ.getCurriculam().click()
        TeacherOBJ.getStudentReorts().click({force:true})
        //cy.get('.dash-blk > .icon-reports').click()
        cy.wait(2000)
        TeacherOBJ.getclassReport().contains(this.data.Class)
        cy.wait(2000)
        TeacherOBJ.getReportname().type(this.data.Organisation)
        cy.wait(2000)
        TeacherOBJ.getReportSection().contains(this.data.Section)
        cy.wait(2000)
        TeacherOBJ.getPerformance().click()
        cy.wait(2000)  
        TeacherOBJ.getMonthPerformance().contains(this.data.MonthPerform)  
        cy.wait(2000)  
        TeacherOBJ.getSubPerfom().contains(this.data.GradeSubj)
        cy.wait(2000)  
        TeacherOBJ.getChapterPerform().contains(this.data.gradechapter)
        cy.wait(2000)  
        TeacherOBJ.getPerformTopic().contains(this.data.PerformTopic).click({force:true})
        cy.wait(2000)
        TeacherOBJ.getActivityTab().click()
        cy.wait(2000)
        TeacherOBJ.getAssessTab().click()
        cy.wait(2000)
        TeacherOBJ.getAssignTab().click()
    })

    it('Teacher Usage Reports ',function() {  
        const TeacherOBJ = new Teacherobj()  
        TeacherOBJ.getStudentReorts().click({force:true})
        cy.wait(2000)
        TeacherOBJ.getclassReport().contains(this.data.Class)
        cy.wait(2000)
        TeacherOBJ.getReportname().type(this.data.Organisation)
        cy.wait(2000)
        TeacherOBJ.getReportSection().contains(this.data.Section)
        cy.wait(2000)
        TeacherOBJ.getUasgeReport().click()
        cy.wait(2000)  
        TeacherOBJ.getMonthUsage().contains(this.data.MonthUsage)  
        cy.wait(2000)  
        TeacherOBJ.getSubPerfom().contains(this.data.GradeSubj)
        cy.wait(2000)  
        TeacherOBJ.getActivityTab().click()
        cy.wait(2000)
        TeacherOBJ.getAssessTab().click()
        cy.wait(2000)
        TeacherOBJ.getAssignTab().click()
        cy.wait(2000)
        TeacherOBJ.getCollaborationTab().click({force: true})
    })

    it('Teacher Comparative Reports ',function() {    
        const TeacherOBJ = new Teacherobj()  
        TeacherOBJ.getStudentReorts().click({force:true})
        TeacherOBJ.getclassReport().contains(this.data.Class)
        cy.wait(2000)
        TeacherOBJ.getReportname().type(this.data.Organisation)
        cy.wait(2000)
        TeacherOBJ.getReportSection().contains(this.data.Section)
        cy.wait(2000)  
        TeacherOBJ.getComparativeperf().click()
        cy.wait(2000)
        TeacherOBJ.getComparativesub().contains(this.data.Subjects)
        cy.wait(2000)  
        TeacherOBJ.getComparativesubChapter().contains(this.data.SubjIntro)
        cy.wait(2000)  
        TeacherOBJ.getComparativetopics().contains(this.data.PerformTopic).click({force:true})
        cy.wait(2000)
        TeacherOBJ.getComparativegrade().contains(this.data.grade)
        cy.wait(2000)
        TeacherOBJ.getCustomdates().contains(this.data.CustomDate)
        cy.wait(2000)
        TeacherOBJ.getActivityTab().click()
        cy.wait(2000)
        TeacherOBJ.getAssessTab().click()
        cy.wait(2000)
        TeacherOBJ.getAssignTab().click()    
    })  
    it('Teacher Class Reports ',function() {
        const TeacherOBJ = new Teacherobj()
        TeacherOBJ.getClasReports().click({force:true})
        cy.wait(2000)
        TeacherOBJ.getClsreportGrade().contains(this.data.Class)
        cy.wait(2000)
        TeacherOBJ.getClsreportsub().contains(this.data.PScinece)
        cy.wait(2000)  
        TeacherOBJ.getClsreportsection().contains(this.data.Section)
        cy.wait(2000)
        TeacherOBJ.getActivityTab().click()
        cy.wait(2000)
        TeacherOBJ.getAssessTab().click()
        cy.wait(2000)
        TeacherOBJ.getAssignTab().click()
        TeacherOBJ.getLogOut().click({force: true})
    })    
    
})    