import merge from 'lodash/merge';

import  { RECEIVE_CURRENT_USER }
import {
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
    case RECEIVE_CURRENT_USER:
      const newReps = action.currentUser.representatives;
      //imgUrl, fName, lName, email, phNum
      //newReps is an array of rep objects fName, lName,
      return merge({}, nullReps, { currentReps: newReps });
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
