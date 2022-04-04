Cypress.Commands.add('seedAndVisit', (seedData = 'fixture:cardsData') => {
  cy.server();
  cy.route('GET', '/api/cards', seedData);
  cy.visit('/');
});
