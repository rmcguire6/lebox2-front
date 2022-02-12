import {render} from '@testing-library/react';
import {CardBox} from '../CardBox';

describe('CardBox', () => {
  const cards = [
    {
      card_id: 1,
      subject: 'Spanish',
      question: 'vivir',
      answer: 'to live',
      creatorId: 1,
      isActive: true,
    },
    {
      card_id: 2,
      subject: 'Spanish',
      question: 'tomar',
      answer: 'to take',
      creatorId: 1,
      isActive: true,
    },
    {
      card_id: 3,
      subject: 'Spanish',
      question: 'comer',
      answer: 'to eat',
      creatorId: 1,
      isActive: true,
    },
    {
      card_id: 4,
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
    it('does not display the error message when loading succeeds', () => {
      renderWithProps();
      const {queryByText} = context;
      expect(queryByText('Cards could not be loaded.')).toBeNull();
    });
    it('displays the cards', () => {
      renderWithProps();
      const {queryByText} = context;
      expect(queryByText('vivir')).not.toBeNull();
      expect(queryByText('tomar')).not.toBeNull();
      expect(queryByText('comer')).not.toBeNull();
      expect(queryByText('escribir')).not.toBeNull();
    });
  });
  describe('when loading fails', () => {
    beforeEach(() => {
      renderWithProps({loadError: true});
    });
    it('displays the error message', () => {
      const {queryByText} = context;
      expect(queryByText('Cards could not be loaded.')).not.toBeNull();
    });
  });
});
