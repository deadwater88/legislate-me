import merge from 'lodash/merge';
import {
  RECEIVE_SUBJECTS,
  RECEIVE_SUBJECT
} from '../actions/subject_actions';

const SubjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_SUBJECTS:
      return action.subjects;
    case RECEIVE_SUBJECT:
      // Review what the action for a single subject will look like
      newState[action.subject.name] = action.subject.following;
      return newState;
    default:
      return state;
  }
};

export default SubjectsReducer;
