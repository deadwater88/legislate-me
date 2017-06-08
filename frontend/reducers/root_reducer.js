import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectsReducer from './subjects_reducer';
import RepresentativesReducer from './representatives_reducer';
import BillsReducer from './bills_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  subjects: SubjectsReducer,
  representatives: RepresentativesReducer,
  bills: BillsReducer
});

export default RootReducer;
