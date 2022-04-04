describe('Input card form', () => {
  let typedQuestion, typedAnswer;
  beforeEach(() => {
    cy.seedAndVisit([]);
    typedQuestion = 'hablar';
    typedAnswer = 'to speak';
  });
  it('focuses input on load', () => {
    cy.focused().should('have.class', 'question');
  });
  it('accepts input', () => {
    cy.get('.question').type(typedQuestion).should('have.value', typedQuestion);
    cy.get('.answer').type(typedAnswer).should('have.value', typedAnswer);
  });
  context('new card form submission', () => {
    beforeEach(() => {
      cy.server();
    });
    it('Adds a new card on submit', () => {
      cy.route('POST', '/test_cards/', {
        card_id: 9999,
        question: typedQuestion,
        answer: typedAnswer,
      });
      cy.get('.question').type(typedQuestion);
      cy.get('.answer').type(typedAnswer);
      cy.get('.newCard_button').click().should('have.value', '');
      cy.get('.cards-list p')
        .should('have.length', 1)
        .and('contain', typedQuestion);
    });
    it('Shows an error message on a failed submission', () => {
      cy.route({
        url: '/test_cards/',
        method: 'POST',
        status: 500,
        response: {},
      });
      cy.get('.question');
      cy.get('.answer');
      cy.get('.newCard_button').click();

      cy.get('.cards-list').should('have.length', 1);
      cy.get('.submission-error').should('be.visible');
    });
  });
});
