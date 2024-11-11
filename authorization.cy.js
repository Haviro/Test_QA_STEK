Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Log in', function() {
  it('Sign in', function() {
    cy.visit('https://demo.app.stack-it.ru/fl/');
    cy.wait(2000); // ожидание 2 секунды
    cy.get("input[type='text']").type('DEMOWEB');
    cy.get("input[type='password']").type('awdrgy');
    cy.contains("Войти").click();
    cy.contains("Да").click();
  })
});

