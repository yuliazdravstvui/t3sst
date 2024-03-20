describe('template spec', () => {
  it('passes', () => {

  //базовая успешная авторизация

  cy.visit('https://dev.profteam.su');
  // cy.wait(2000);
  cy.get('[href="/login"] > .button').click();
  // cy.wait(2000);
  cy.get('.form-input--text').type('testerAdmin');
  // cy.wait(2000);
  cy.get('.form-input--password').type('Password1');
  // cy.wait(2000);
  cy.get(':nth-child(3) > .button').click();
  cy.wait(2000);

  cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').click()
  cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').click()
  cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .search-title').should('exist')

  })
})

