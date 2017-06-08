import merge from 'lodash/merge';

import {
  RECEIVE_BILLS
} from '../actions/bill_actions';


const BillsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BILLS:
      return action.bills;
    default:
      return state;
  }
};

export default BillsReducer;
