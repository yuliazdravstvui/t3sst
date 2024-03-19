describe('template spec', () => {
  it('passes', () => {

    // успешная регистрация

    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/registration"] > .button').click()

    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('studentysa')
    cy.get('.form-input--email').type('studentysa@gmail.com')
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Rfrfirf2004')
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Rfrfirf2004')
    cy.get(':nth-child(4) > .button').click()
    cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Попова')
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Юлия')
    cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type('Андреевна')
    cy.get(':nth-child(3) > .button').click()
    cy.get('.header-container__user-avatar-info').should('exist')

  })
})
