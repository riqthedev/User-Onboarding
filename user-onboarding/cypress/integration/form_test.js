describe('User OnBoarding', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    const nameText = () => cy.get('input[name=name]')
    const emailText = () => cy.get('input[name=email')
    const passwordText = () => cy.get('input[name=password')
    const submitBtn = () => cy.get ('.btn')
    const termsBtn = () => cy.get ('input[value=Yes]')
    const form = () => cy.get("#valid")
    
    it('boxes can accept text', () => {

    
      nameText()
        .should('have.value', '')
        .type('Creating Input')
        .should('have.value', 'Creating Input')
  
        emailText()
        .should('have.value', '')
        .type('web46@lambda.com')
        .should('have.value', 'web46@lambda.com')
  
        passwordText()
        .should('have.value', '')
        .type('Creating Input')
        .should('have.value', 'Creating Input')

        
        termsBtn()
       .click()

       .form()
       .check()

        submitBtn()
        .click()




    })
  })
  