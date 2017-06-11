import {
  RECEIVE_BILL
} from '../actions/bill_actions';


const BillReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BILL:
      return action.bill;
    default:
      return state;
  }
};

export default BillReducer;
