describe('Flash card', () => {
  let question, answer;
  beforeEach(() => {
    cy.seedAndVisit();
    question = 'vivir';
    answer = 'to live';
  });

  it('displays question  only at initialization', () => {
    cy.get('.cards-list p').first().should('contain', question);
    cy.get('.cards-list p').first().should('not.contain', answer);
  });
  it('displays only first card', () => {
    cy.get('.cards-list p').should('contain', question);
    cy.get('.cards-list p').should('not.contain', 'tomar');
  });
  it('displays instructions on how to show answer', () => {
    let message = 'try to remember, then click';
    cy.get('.message').should('contain', message);
  });
});
