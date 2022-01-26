import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from '../cards/reducers';
import {loadCards} from '../cards/actions';
describe('cards', () => {
  describe('loadCards action', () => {
    it('stores the cards', async () => {
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
      const api = {
        loadCards: () => Promise.resolve(records),
      };
      const initialState = {
        records: [],
      };

      const store = createStore(
        cardsReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );
      await store.dispatch(loadCards());

      expect(store.getState().records).toEqual(records);
    });
  });
});
