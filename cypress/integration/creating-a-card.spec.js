describe('Creating a Card', () => {
  it('allows adding a card', () => {
    const newCard = {
      subject: 'Spanish',
      question: 'hablar',
      answer: 'to speak',
      creatorId: 1,
      isActive: true,
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
        cardId: 1,
        question: newCard.question,
      },
    }).as('addCard');

    cy.visit('/test_cards/');

    cy.get('[placeholder="Add a Card"]').type(newCard.question);
    cy.contains('ADD').click();

    cy.wait('@addCard').its('requestBody').should('deep.equal', {
      question: newCard.question,
    });
    cy.contains(newCard.question);
  });
});
