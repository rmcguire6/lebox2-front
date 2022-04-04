describe('App initialization', () => {
  it('Loads cards on page load', () => {
    cy.seedAndVisit();
    cy.get('.cards-list li').should('have.length', 3);
  });
  it('Displays an error on loading failure', () => {
    cy.server();
    cy.route({
      url: '/api/cards',
      method: 'GET',
      status: 500,
      response: {},
    });
    cy.visit('/');
    cy.get('.cards-list li').should('not.exist');

    cy.get('.loading-error').should('be.visible');
  });
});
