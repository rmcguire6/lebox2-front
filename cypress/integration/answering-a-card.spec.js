describe('Answering a Card', () => {
  it('allows clicking a card to see the answer', () => {
    const cardsData = [
      {
        subject: 'Spanish',
        question: 'vivir',
        answer: 'to live',
        creatorId: 1,
        isActive: true,
      },
      {
        subject: 'Spanish',
        question: 'tomar',
        answer: 'to take',
        creatorId: 1,
        isActive: true,
      },
      {
        subject: 'Spanish',
        question: 'comer',
        answer: 'to eat',
        creatorId: 1,
        isActive: true,
      },
      {
        subject: 'Spanish',
        question: 'escribir',
        answer: 'to write',
        creatorId: 1,
        isActive: true,
      },
    ];
    const isCorrect = true;

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: 'http://localhost:8000/test_cards/',
      response: cardsData,
    });

    cy.visit('/test_cards/');

    cy.contains('ANSWER').click();
    cy.contains(cardsData[0].answer);
    cy.contains('CORRECT?').click().type(isCorrect);
  });
});
