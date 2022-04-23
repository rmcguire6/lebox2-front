describe('Flash card', () => {
  let question, answer;
  beforeEach(() => {
    cy.seedAndVisit();
    question = 'vivir';
    answer = 'to live';
  });

  it('displays question at initialization', () => {
    cy.get('.cards button').first().should('contain', question);
    cy.get('.cards button').first().should('not.contain', answer);
  });
  it('displays only first card', () => {
    cy.get('.cards button').should('contain', question);
    cy.get('.cards button').should('not.contain', 'hablar');
    cy.get('.cards button').should('not.contain', 'comer');
  });
  it('displays instructions on how to show answer', () => {
    let message = 'try to remember, then click';
    cy.get('.message').should('contain', message);
  });
  describe('when answer is clicked', () => {
    beforeEach(() => {
      cy.get('.cards button').first().click();
    });
    it('it no longer shows the question but the answer', () => {
      cy.get('.cards button').first().should('contain', answer);
      cy.get('.cards button').first().should('not.contain', question);
    });
    it('it shows the message "did you remember it?"', () => {
      cy.get('.message').should('contain', 'did you remember it?');
    });
    it('it shows the buttons "Yes" and "No"', () => {
      cy.get('.no').should('contain', 'No, try again');
      cy.get('.yes').should('contain', 'Yes, I did!');
    });
    it('shows the question again when the No button is clicked"', () => {
      cy.get('.no').click();
      cy.get('.cards button').first().should('contain', question);
      cy.get('.cards button').first().should('not.contain', answer);
    });
  });
  describe('when the Yes button is clicked', () => {
    beforeEach(() => {
      cy.get('.cards button').first().click();
      cy.get('.yes').click().as('card');
    });
    it('it removes the card', () => {
      cy.route({
        url: '/test_cards/1',
        method: 'PUT',
        status: 200,
        response: {},
      });
      cy.get('@card').should('not.exist');
    });
    it('it shows the next card', () => {
      cy.get('.cards button').first().should('contain', 'hablar');
      cy.get('.cards button').first().should('not.contain', 'to speak');
    });
  });
});
