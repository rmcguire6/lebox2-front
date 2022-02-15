describe('Answering a Card', () => {
  it('allows clicking a card to see the answer', () => {
    const cardsData = [
      {card_id: 1, question: 'vivir', answer: 'to live'},
      {card_id: 2, question: 'tomar', answer: 'to take'},
      {
        card_id: 3,
        question: 'comer',
        answer: 'to eat',
      },
    ];
    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: 'http://localhost:8000/test_cards/',
      response: cardsData,
    });

    cy.visit('/test_cards/');

    cy.contains('ANSWER').click();
    cy.contains(cardsData[0].answer);
    cy.contains('Correct?');
    cy.contains('YES').click();
    cy.contains('NO').click();
  });
});
