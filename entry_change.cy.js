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
    cy.get("#5354").find('[data-cy="btn-edit"]').should('be.visible').click();
  })
});