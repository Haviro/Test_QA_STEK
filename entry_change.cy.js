Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Log in', function () {
  it('Sign in', function () {
    cy.visit('https://demo.app.stack-it.ru/fl/');
    cy.wait(2000);
    cy.get("input[type='text']").type('DEMOWEB');
    cy.get("input[type='password']").type('awdrgy');
    cy.contains("Войти").click();

    cy.get('[data-test-id="Адреса проживающих"]').click();
    cy.wait(2000);
    cy.get("[id='5354']").should('be.visible').trigger('mouseover')
    cy.get("#5354").find('[data-cy="btn-edit"]').click();
    cy.get("input[data-test-id='Название района']").clear().type('Тестовое задание 2');
    cy.get("input[data-test-id='Номер в списке']").click().clear().type('101')
    cy.contains("Сохранить").click();
  })
});