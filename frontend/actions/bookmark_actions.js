import * as BillAPIUtil from '../util/bill_api_util';
// import * as BookmarkAPIUtil from '../util/bill_api_util';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';

export const receiveBookmarks = bookmarks => ({
  type: RECEIVE_BOOKMARKS,
  bookmarks
});

export const receiveBookmark = bookmark => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

export const fetchBookmarks = subject  => dispatch => (
  BillAPIUtil.fetchBookMarkedBills().then(bookmarks =>
    dispatch(receiveBookmark(bookmarks.data))
));

export const createBookmark = bookmark  => dispatch => (
  BillAPIUtil.bookmarkBill(bookmark).then(bookmarkedBill =>
    dispatch(receiveBookmark(bookmarkedBill.data))
));
