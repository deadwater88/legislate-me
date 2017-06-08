import merge from 'lodash/merge';

import {
  RECEIVE_BOOKMARK,
  RECEIVE_BOOKMARKS
} from '../actions/bookmark_actions';

const BookmarksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({},state);
  switch(action.type){
    case RECEIVE_BOOKMARK:
      const newBookmark = action.bookmark;
      return merge({}, state, newBookmark);
    case RECEIVE_BOOKMARKS:
      return action.bookmarks;
    default:
      return state;
  }
};

export default BookmarksReducer;
