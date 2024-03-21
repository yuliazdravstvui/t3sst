describe('template spec', () => {
  it('checking the error message when authorizing a student', () => {

    // проверка вывода об ошбике при авторизации студента(пустое поле для ввода пароля)

    cy.visit('https://dev.profteam.su/')
    cy.get('[href="/login"] > .button').click()
    cy.wait(1000)
    cy.get('.form-input--text').type('testerStudent')
    cy.get('.form-input--text').clear()
    cy.get('.form-error').should('have.text', 'Обязательное поле, без пробелов')

  })
})
