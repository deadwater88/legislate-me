import merge from 'lodash/merge';

import {
  RECEIVE_REPRESENTATIVES,
  RECEIVE_ERRORS
} from '../actions/representatives_actions';

const nullReps = {
  currentReps: null,
  errors: []
};

const RepresentativesReducer = (state = nullReps, action) => {
  Object.freeze(state);
  let newState = merge({},state);
  switch(action.type){
    case RECEIVE_REPRESENTATIVES:
      const newReps = action.representatives;
      return merge({}, nullReps, { currentReps: newReps });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullReps, {
        errors
      });
    default:
      return state;
  }
};

export default RepresentativesReducer;
