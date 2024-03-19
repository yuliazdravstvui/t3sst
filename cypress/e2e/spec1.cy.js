describe('template spec', () => {
  it('passes', () => {

    // проверка вывода об ошбике при авторизации студента

    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/login"] > .button').click()
    cy.wait(1000)
    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--text').clear()
    cy.get('.form-error').should('exist')
    cy.log('Обязательное поле')

  })
})
