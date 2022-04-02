Cypress.Commands.add('seedAndVisit', () => {
  cy.server();
  cy.route('GET', '/api/cards', 'fixture:cardsData');
  cy.visit('/');
});
