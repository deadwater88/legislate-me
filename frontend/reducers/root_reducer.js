import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RepresentativesReducer from './representatives_reducer';
import BillsReducer from './bills_reducer';
import BookmarksReducer from './bookmarks_reducer';
import BillReducer from './bill_reducer';

const appReducer = combineReducers({
  session: SessionReducer,
  representatives: RepresentativesReducer,
  bills: BillsReducer,
  bookmarks: BookmarksReducer,
  bill: BillReducer
});


const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
