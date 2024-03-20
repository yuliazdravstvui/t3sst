describe('template spec', () => {
  it('job creation', () => {
  cy.visit('https://dev.profteam.su/')

  // успешная авторизация

  cy.get('[href="/login"] > .button').click()
  cy.wait(1000)
  cy.get('.form-input--text').type('testerEmployer')
  cy.get('.form-input--password').type('Password1')
  cy.wait(1000)
  cy.get(':nth-child(3) > .button').click()

  //создание вакансии

  cy.get(':nth-child(7) > .menu-item__item-name').click()
  cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click()
  cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type('Вакансия', {force: true})
  cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > textarea').type('Требование')
  cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('Обязанность')
  cy.wait(1000)
  cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > button').click({force: true})
  cy.url().should('include', '/account/vacancies')
  })
})

