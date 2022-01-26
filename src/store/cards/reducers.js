import {combineReducers} from 'redux';
import {STORE_CARDS} from './actions';

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_CARDS:
      return action.records;
    default:
      return state;
  }
};

export default combineReducers({
  records,
});
