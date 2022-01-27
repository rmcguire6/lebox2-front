import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from '../cards/reducers';
import {loadCards} from '../cards/actions';
describe('cards', () => {
  describe('initially', () => {
    it('does not have the loading flag set', () => {
      const initialState = {};

      const store = createStore(
        cardsReducer,
        initialState,
        applyMiddleware(thunk),
      );

      expect(store.getState().loading).toEqual(false);
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
      it('sets a loading flag', () => {
        const api = {
          loadCards: () => new Promise(() => {}),
        };
        const initialState = {};

        const store = createStore(
          cardsReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        store.dispatch(loadCards());

        expect(store.getState().loading).toEqual(true);
      });
    });
  });
});
