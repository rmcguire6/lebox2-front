export const START_LOADING = 'START_LOADING';
export const STORE_CARDS = 'STORE_CARDS';
export const RECORD_LOADING_ERROR = 'RECORD_LOADING_ERROR';
export const ADD_CARD = 'ADD_CARD';

export const loadCards = () => (dispatch, getState, api) => {
  dispatch(startLoading());
  api
    .loadCards()
    .then(records => {
      dispatch(storeCards(records));
    })
    .catch(() => {
      dispatch(recordLoadingError());
    });
};
const startLoading = () => ({type: START_LOADING});
const storeCards = records => ({
  type: STORE_CARDS,
  records,
});
const recordLoadingError = () => ({
  type: RECORD_LOADING_ERROR,
});
const addCard = record => ({
  type: ADD_CARD,
  record,
});
export const createCard = question => (dispatch, getState, api) => {
  return api.createCard(question).then(record => {
    dispatch(addCard(record));
  });
};
