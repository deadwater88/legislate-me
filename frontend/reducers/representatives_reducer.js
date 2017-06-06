import merge from 'lodash/merge';

import {
  RECEIVE_REPRESENTATIVES
} from '../actions/representatives_actions';

const RepresentativesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({},state);
  switch(action.type){
    case RECEIVE_REPRESENTATIVES:
      return action.representatives;
    default:
      return state;
  }
};

export default RepresentativesReducer;
