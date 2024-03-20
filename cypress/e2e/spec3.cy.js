describe('template spec', () => {
  it('successful password change', () => {

    //базовая успешная авторизация

    cy.visit('https://dev.profteam.su');
    // cy.wait(2000);
    cy.get('[href="/login"] > .button').click();
    // cy.wait(2000);
    cy.get('.form-input--text').type('testerInstitution');
    // cy.wait(2000);
    cy.get('.form-input--password').type('Password1');
    // cy.wait(2000);
    cy.get(':nth-child(3) > .button').click();
    cy.wait(2000);

  // успешное изменение пароля

    cy.get(':nth-child(1) > .form-input--password').type('QWEasd1234');
    cy.wait(2000)
    cy.get(':nth-child(2) > .form-input--password').type('QWEasd1234');
    cy.get('.form__buttons > div > .button').click();
    cy.wait(2000)


    // возвращение старого пароля чтобы не было ошибок при входе по данным из ТЗ

    cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label').click()
    cy.go('back')
    cy.get(':nth-child(1) > .form-input--password').type('Password1');
    cy.wait(2000)
    cy.get(':nth-child(2) > .form-input--password').type('Password1');
    cy.get('.form__buttons > div > .button').click();
    cy.wait(2000)
    cy.get('.form__buttons > div > p').should('exist')
  })
})