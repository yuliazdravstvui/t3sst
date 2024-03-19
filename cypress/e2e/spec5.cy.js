describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/registration"] > .button').click()

    // ошибка при регистрации

    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('studentik')
    cy.get('.form-input--email').type('studentik@gmail.com')
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Rfrfirf2004')
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Rfrfirf2004')
    cy.get(':nth-child(4) > .button').click()
    cy.get(':nth-child(1) > .form-error > span').should('exist')
  })
})
