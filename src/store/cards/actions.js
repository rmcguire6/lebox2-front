export const STORE_CARDS = 'STORE_CARDS';

export const loadCards = () => (dispatch, getState, api) => {
  api.loadCards().then(records => {
    dispatch(storeCards(records));
  });
};

const storeCards = records => ({
  type: STORE_CARDS,
  records,
});
