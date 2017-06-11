import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
// import SubjectsReducer from './subjects_reducer';
import RepresentativesReducer from './representatives_reducer';
import BillsReducer from './bills_reducer';
import BookmarksReducer from './bookmarks_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  representatives: RepresentativesReducer,
  bills: BillsReducer,
  bookmarks: BookmarksReducer
});

export default RootReducer;
