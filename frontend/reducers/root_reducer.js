import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectsReducer from './subjects_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  subjects: SubjectsReducer
});

export default RootReducer;
