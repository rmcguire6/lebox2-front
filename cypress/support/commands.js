Cypress.Commands.add('seedAndVisit', (seedData = 'fixture:cardsData') => {
  cy.server();
  cy.route('GET', '/test_cards/', seedData);
  cy.visit('/');
});
