describe('Input card form', () => {
  let typedQuestion, typedAnswer;
  beforeEach(() => {
    cy.visit('/');
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
    it.only('Adds a new card on submit', () => {
      cy.server();
      cy.route('POST', '/api/cards', {
        card_id: 9999,
        question: typedQuestion,
        answer: typedAnswer,
      });
      cy.get('.question').type(typedQuestion);
      cy.get('.answer').type(typedAnswer);
      cy.get('.newCard_button').click();
    });
  });
});
