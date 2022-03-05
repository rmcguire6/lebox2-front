describe('Listing Cards', () => {
  it('shows cards for one user', () => {
    cy.server();

    cy.route('GET', '/test_cards/', 'fixture:cardsData');

    cy.visit('/test_cards/');
    cy.get('p').should('have.length', 3);
  });
});
