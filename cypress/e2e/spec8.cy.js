describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su/')

  // Добавление роли студенту

  //Авторизация успешная

    cy.get('[href="/login"] > .button').click()
    cy.wait(1000)
    cy.get('.form-input--text').type('LoraStratos')
    cy.get('.form-input--password').type('Eujkm1')
    cy.wait(1000)

  //Добавление роли студента

    cy.get(':nth-child(3) > .button').click()
    cy.get('.page-nav__role-block > .button').click()
    cy.wait(1000)
    cy.get('.select-role-form > :nth-child(3)').click()
    cy.log('Роль студента добавлена!')
    cy.get('.menu-item__name').should('exist')

  //сброс роли студента

  cy.get('[data-v-02661ece=""][data-v-4e40dec7=""] > .form__buttons > .button').click()

})
})