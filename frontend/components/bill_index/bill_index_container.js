import { connect } from 'react-redux';
import BillIndex from './bill_index';
import { createBookmark, fetchBookmarks, deleteBookmark } from '../../actions/bookmark_actions';
import {fetchBills, fetchBillsBySubject} from '../../actions/bill_actions';
import {SUBJECT_IMAGES} from '../../util/subject_api_util';

const mapStateToProps = (state) => ({
  bills: state.bills,
  bookmarks: state.bookmarks,
  SUBJECT_IMAGES
});

const mapDispatchToProps = dispatch => ({
  bookmarkBill: (bill) => dispatch(createBookmark(bill)),
  deleteBookmark: (bill) => dispatch(deleteBookmark(bill)),
  fetchBills: () => dispatch(fetchBills()),
  fetchBookmarks: () => dispatch(fetchBookmarks()),
  fetchBillsBySubject: (subject) => dispatch(fetchBillsBySubject(subject))
});

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex);
