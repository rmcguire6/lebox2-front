describe('Answering a Card', () => {
  beforeEach(() => {
    cy.visit('/test_cards/');
  });
  it('allows clicking a card to see the answer', () => {
    cy.contains('Answer').click();
    cy.contains('Correct?');
    cy.get('p').should('have.length', 4);
    cy.contains('No');
    cy.contains('Yes').click();
    cy.get('p').should('have.length', 3);
  });
});
