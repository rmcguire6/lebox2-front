describe('Flash card', () => {
  let question, answer;
  beforeEach(() => {
    cy.seedAndVisit();
    question = 'vivir';
    answer = 'to live';
  });

  it('displays question  only at initialization', () => {
    cy.get('.cards-list button').first().should('contain', question);
    cy.get('.cards-list button').first().should('not.contain', answer);
  });
  it('displays only first card', () => {
    cy.get('.cards-list button').should('contain', question);
    cy.get('.cards-list button').should('not.contain', 'tomar');
  });
  it('displays instructions on how to show answer', () => {
    let message = 'try to remember, then click';
    cy.get('.message').should('contain', message);
  });
  describe('when answer is clicked', () => {
    beforeEach(() => {
      cy.get('.cards-list button').first().click();
    });
    it('it no longer shows the question but the answer', () => {
      cy.get('.cards-list button').first().should('contain', answer);
      cy.get('.cards-list button').first().should('not.contain', question);
    });
    it('it shows the message "did you remember it?"', () => {
      cy.get('.message').should('contain', 'did you remember it?');
    });
  });
});
