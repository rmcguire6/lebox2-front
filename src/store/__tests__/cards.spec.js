import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from '../cards/reducers';
import {loadCards, createCard} from '../cards/actions';
describe('cards', () => {
  describe('initially', () => {
    let store;
    beforeEach(() => {
      const initialState = {};

      store = createStore(cardsReducer, initialState, applyMiddleware(thunk));
    });
    it('does not have the loading flag set', () => {
      expect(store.getState().loading).toEqual(false);
    });
    it('does not have the error flag set', () => {
      expect(store.getState().loadError).toEqual(false);
    });
  });
  describe('loadCards action', () => {
    describe('when loading succeeds', () => {
      const records = [
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
      let store;
      beforeEach(() => {
        const api = {
          loadCards: () => Promise.resolve(records),
        };
        const initialState = {
          records: [],
        };

        store = createStore(
          cardsReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );
        return store.dispatch(loadCards());
      });
      it('stores the cards', () => {
        expect(store.getState().records).toEqual(records);
      });
      it('clears the loading flag', () => {
        expect(store.getState().loading).toEqual(false);
      });
    });
    describe('while loading', () => {
      let store;

      beforeEach(() => {
        const api = {
          loadCards: () => new Promise(() => {}),
        };
        const initialState = {loadError: true};

        store = createStore(
          cardsReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        store.dispatch(loadCards());
      });
      it('sets a loading flag', () => {
        expect(store.getState().loading).toEqual(true);
      });
      it('clears the error flag', () => {
        expect(store.getState().loadError).toEqual(false);
      });
    });
  });
  describe('when loading fails', () => {
    let store;
    beforeEach(() => {
      const api = {
        loadCards: () => Promise.reject(),
      };
      const initialState = {};

      store = createStore(
        cardsReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      return store.dispatch(loadCards());
    });
    it('sets an error flag', () => {
      expect(store.getState().loadError).toEqual(true);
    });
    it('clears the loading flag', () => {
      expect(store.getState().loading).toEqual(false);
    });
  });
  describe('createCard action', () => {
    const newCardQuestion = 'hablar';
    const existingCard = {cardId: 1, question: 'vivir'};
    const responseCard = {cardId: 5, question: newCardQuestion};

    let api;
    let store;

    beforeEach(() => {
      api = {
        createCard: jest.fn().mockName('createCard'),
      };
      const initialState = {records: [existingCard]};

      store = createStore(
        cardsReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );
    });
    it('saves the card to the server', () => {
      api.createCard.mockResolvedValue(responseCard);
      store.dispatch(createCard(newCardQuestion));
      expect(api.createCard).toHaveBeenCalledWith(newCardQuestion);
    });
    describe('when save succeeds', () => {
      beforeEach(() => {
        api.createCard.mockResolvedValue(responseCard);
        store.dispatch(createCard(newCardQuestion));
      });

      it('stores the returned restaurant in the store', () => {
        expect(store.getState().records).toEqual([existingCard, responseCard]);
      });
    });
  });
});
