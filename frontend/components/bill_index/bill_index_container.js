import { connect } from 'react-redux';
import BillIndex from './BillIndex';
import { createBookmark } from '../actions/bookmark_actions';

const mapStateToProps = (state) => ({
  bills: state.bills
});

const mapDispatchToProps = dispatch => ({
  bookmarkBill: (bill) => dispatch(createBookmark(bill))
});

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex);
