import {render} from '@testing-library/react';
import {CardBox} from '../CardBox/CardBox';

describe('CardBox', () => {
  const cards = [
    {
      cardId: 1,
      subject: 'Spanish',
      question: 'vivir',
      answer: 'to live',
      creatorId: 1,
      isActive: true,
    },
    {
      cardId: 2,
      subject: 'Spanish',
      question: 'tomar',
      answer: 'to take',
      creatorId: 1,
      isActive: true,
    },
    {
      cardId: 3,
      subject: 'Spanish',
      question: 'comer',
      answer: 'to eat',
      creatorId: 1,
      isActive: true,
    },
    {
      cardId: 4,
      subject: 'Spanish',
      question: 'escribir',
      answer: 'to write',
      creatorId: 1,
      isActive: true,
    },
  ];
  let loadCards;
  let context;

  beforeEach(() => {
    loadCards = jest.fn().mockName('loadCards');
    context = render(<CardBox loadCards={loadCards} cards={cards} />);
  });
  it('loads the session cards on first render', () => {
    expect(loadCards).toHaveBeenCalled();
  });

  it('displays the cards', () => {
    const {queryByText} = context;
    expect(queryByText('vivir')).not.toBeNull();
    expect(queryByText('tomar')).not.toBeNull();
    expect(queryByText('comer')).not.toBeNull();
    expect(queryByText('escribir')).not.toBeNull();
  });
});
