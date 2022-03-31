describe('Input card form', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('focuses input on load', () => {
    cy.focused().should('have.class', 'question');
  });
  it.only('accepts input', () => {
    const typedQuestion = 'hablar';
    cy.get('.question').type(typedQuestion).should('have.value', typedQuestion);
  });
});
