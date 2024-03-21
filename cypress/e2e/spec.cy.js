describe('template spec', () => {
  it('negative student authorization check', () => {

    // негативная проверка авторизации студента

    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/login"] > .button').click()

    cy.get('.form-input--text').type('testerStudent')
    cy.wait(1000);

    cy.get('.form-input--password').type('password')
    cy.get(':nth-child(3) > .button').click()

    cy.get('.form-error').should('have.text', 'Неверный логин или пароль, попробуйте заново.')
  })
})
