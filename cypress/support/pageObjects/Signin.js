class Signin {
    getUsername() 
    {
      return cy.get('.login-form > [type="text"]')
    }
    getPassword() 
    {
      return cy.get('.login-form > .ng-pristine')
    }
    getSignin() 
    {
      return cy.contains('Sign In')
    }
    getSuccess() 
    {
      return cy.get('.success')
    }
  }
  export default Signin