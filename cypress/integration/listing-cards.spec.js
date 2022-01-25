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
      url: 'http://159.223.117.26:8000/cards/',
      response: cardsData,
    });

    cy.visit('/cards/');
    cy.contains(cardsData[0].subject);
    cy.contains(cardsData[1].answer);
    cy.contains(cardsData[2].question);
    cy.contains(cardsData[3].creatorId);
    cy.contains(cardsData[3].isActive);
  });
});
