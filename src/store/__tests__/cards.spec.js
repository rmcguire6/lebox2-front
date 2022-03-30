import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from '../cards/reducers';
import {loadCards, createCard, REMOVE_CARD} from '../cards/actions';
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
          card_id: 1,
          question: 'vivir',
          answer: 'to live',
        },
        {
          card_id: 2,
          question: 'tomar',
          answer: 'to take',
        },
        {
          card_id: 3,
          question: 'comer',
          answer: 'to eat',
        },
        {
          card_id: 4,
          question: 'escribir',
          answer: 'to write',
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
    const newCardAnswer = 'to speak';
    const existingCard = {card_id: 1, question: 'vivir', answer: 'to live'};
    const responseCard = {card_id: 5, question: 'hablar', answer: 'to speak'};

    let api;
    let store;
    let promise;

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
      store.dispatch(createCard(newCardQuestion, newCardAnswer));
      expect(api.createCard).toHaveBeenCalledWith(
        newCardQuestion,
        newCardAnswer,
      );
    });
    describe('when save succeeds', () => {
      beforeEach(() => {
        api.createCard.mockResolvedValue(responseCard);
        promise = store.dispatch(createCard(newCardQuestion, newCardAnswer));
      });
      it('stores the returned card in the store', () => {
        expect(store.getState().records).toEqual([existingCard, responseCard]);
      });
      it('resolves', () => {
        return expect(promise).resolves.toBeUndefined();
      });
    });
    describe('when save fails', () => {
      it('rejects', () => {
        api.createCard.mockRejectedValue();
        promise = store.dispatch(createCard(newCardQuestion, newCardAnswer));
        return expect(promise).rejects.toBeUndefined();
      });
    });
  });
  describe('delete Card action', () => {
    it('deletes the card from the cards array', () => {
      let result;
      const initialState = {
        loading: false,
        loadError: false,
        records: [
          {card_id: 1, question: 'to drive', answer: 'montar', level: 1},
        ],
      };
      const action = {type: REMOVE_CARD, card_id: 1};
      result = cardsReducer(initialState, action);
      expect(result).toEqual({loading: false, loadError: false, records: []});
    });
  });
});
