import { connect } from 'react-redux';
import BillIndex from './bill_index';
import { createBookmark, fetchBookmarks } from '../../actions/bookmark_actions';
import {fetchBills} from '../../actions/bill_actions';
import {SUBJECT_IMAGES} from '../../util/subject_api_util';

const mapStateToProps = (state) => ({
  bills: state.bills,
  SUBJECT_IMAGES
});

const mapDispatchToProps = dispatch => ({
  bookmarkBill: (bill) => dispatch(createBookmark(bill)),
  fetchBills: () => dispatch(fetchBills()),
  fetchBookmarks: () => dispatch(fetchBookmarks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex);
