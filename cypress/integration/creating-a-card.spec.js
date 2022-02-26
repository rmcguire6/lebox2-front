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
        card_id: 5,
        question: newCard.question,
        answer: newCard.answer,
      },
    }).as('addCard');

    cy.visit('/test_cards/');

    cy.get('[placeholder="Add a Question"]').type(newCard.question);
    cy.get('[placeholder="Add an Answer"]').type(newCard.answer);
    cy.contains('ADD').click();

    cy.wait('@addCard');
    cy.contains(newCard.question);
  });
});
