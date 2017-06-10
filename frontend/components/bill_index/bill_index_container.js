import { connect } from 'react-redux';
import BillIndex from './bill_index';
import { createBookmark, fetchBookmarks } from '../../actions/bookmark_actions';
import {fetchBills} from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
  bills: state.bills
});

const mapDispatchToProps = dispatch => ({
  bookmarkBill: (bill) => dispatch(createBookmark(bill)),
  fetchBills: () => dispatch(fetchBills()),
  fetchBookmarks: () => dispatch(fetchBookmarks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex);
