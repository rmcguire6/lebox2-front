describe('Listing Cards', () => {
  it('shows cards for one user', () => {
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

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: 'http://localhost:8000/test_cards/',
      response: cardsData,
    });

    cy.visit('/test_cards/');
    cy.contains(cardsData[0].question);
    cy.contains(cardsData[1].question);
    cy.contains(cardsData[2].question);
    cy.contains(cardsData[3].question);
  });
});
