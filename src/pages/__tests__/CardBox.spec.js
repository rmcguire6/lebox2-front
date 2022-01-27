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

  const renderWithProps = (propOverrides = {}) => {
    const props = {
      loadCards: jest.fn().mockName('loadCards'),
      loading: false,
      cards,
      ...propOverrides,
    };
    loadCards = props.loadCards;
    context = render(<CardBox {...props} />);
  };

  it('loads the session cards on first render', () => {
    renderWithProps();
    expect(loadCards).toHaveBeenCalled();
  });

  it('displays the cards', () => {
    renderWithProps();
    const {queryByText} = context;
    expect(queryByText('vivir')).not.toBeNull();
    expect(queryByText('tomar')).not.toBeNull();
    expect(queryByText('comer')).not.toBeNull();
    expect(queryByText('escribir')).not.toBeNull();
  });

  describe('when loading succeeds', () => {
    it('displays the loading indicator while loading', () => {
      renderWithProps({loading: true});
      const {queryByTestId} = context;
      expect(queryByTestId('loading-indicator')).not.toBeNull();
    });
    it('does not display the loading indicator when not loading', () => {
      renderWithProps();
      const {queryByTestId} = context;
      expect(queryByTestId('loading-indicator')).toBeNull();
    });
  });
});
