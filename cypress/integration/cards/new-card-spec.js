describe('Input card form', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('focuses input on load', () => {
    cy.focused().should('have.class', 'question');
  });
  it('accepts input', () => {
    const typedQuestion = 'hablar';
    cy.get('.question').type(typedQuestion).should('have.value', typedQuestion);
  });
  context('New Card Form submission', () => {
    it.only('Adds a  new card on submit', () => {
      cy.get('.question').type('vivir').type('{enter}').click();
    });
  });
});
