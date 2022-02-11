describe('Creating a Card', () => {
  it('allows adding a card', () => {
    const newCard = {
      answer: 'to speak',
      question: 'hablar',
    };

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: 'http://localhost:8000/test_cards/',
      response: [],
    });

    cy.route({
      method: 'POST',
      url: 'http://localhost:8000/test_cards/',
      response: {
        cardId: 5,
        question: newCard.question,
      },
    }).as('addCard');

    cy.visit('/test_cards/');

    cy.get('[placeholder="Add a Card"]').type(newCard.question);
    cy.contains('ADD').click();

    cy.wait('@addCard')
      .its('requestBody')
      .should('deep.equal', newCard.question);
    cy.contains(newCard.question);
  });
});
