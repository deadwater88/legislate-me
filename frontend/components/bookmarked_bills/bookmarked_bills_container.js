import { connect } from 'react-redux';
import BookmarkedBills from './bookmarked_bills';
import { createBookmark } from '../../actions/bookmark_actions';
import { fetchBookmarks } from '../../actions/bill_actions';
// import {fetchBills} from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks
});

const mapDispatchToProps = dispatch => ({
  fetchBookmarks: () => dispatch(fetchBookmarks()),
  createBookmark: (bookmark) => dispatch(createBookmark(bookmark))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkedBills);
