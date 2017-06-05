import { combineReducers } from 'redux';
import SubjectsReducer from './subjects_reducer';

const RootReducer = combineReducers({
  subjects: SubjectsReducer
});

export default RootReducer;
