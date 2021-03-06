import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

import {
  RECEIVE_SUBJECTS
} from '../actions/subject_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: {}
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      // newState = merge({}, nullUser, {
      //   currentUser
      // });
      return {currentUser, errors: {}};
    case RECEIVE_ERRORS:
      const errors = action.errors;
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    case RECEIVE_SUBJECTS:
      newState = merge({}, state, {subjects: action.subjects});
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
