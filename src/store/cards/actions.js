export const START_LOADING = 'START_LOADING';
export const STORE_CARDS = 'STORE_CARDS';

export const loadCards = () => (dispatch, getState, api) => {
  dispatch(startLoading());
  api.loadCards().then(records => {
    dispatch(storeCards(records));
  });
};
const startLoading = () => ({type: START_LOADING});
const storeCards = records => ({
  type: STORE_CARDS,
  records,
});
