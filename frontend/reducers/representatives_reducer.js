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
      //imgUrl, fName, lName, email, phNum 
      //newReps is an array of rep objects fName, lName,
      return merge({}, nullReps, { currentReps: newReps }); //overrride currentReps property of nullReps
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
