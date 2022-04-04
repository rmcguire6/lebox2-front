describe('App initialization', () => {
  it('Loads cards on page load', () => {
    cy.seedAndVisit();
    cy.get('.cards-list p').first().should('have.length', 1);
  });
  it('Displays an error on loading failure', () => {
    cy.server();
    cy.route({
      url: '/test_cards/',
      method: 'GET',
      status: 500,
      response: {},
    });
    cy.visit('/');
    cy.get('.cards-list p').should('not.exist');

    cy.get('.loading-error').should('be.visible');
  });
});
