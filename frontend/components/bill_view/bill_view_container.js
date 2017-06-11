import { connect } from 'react-redux';

import BillView from './bill_view';
import { fetchBillInfo } from '../../actions/bill_actions';
// import { contactRepresentatives } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  // contactRepresentatives: contactRepresentatives(state.representatives)
  bill: state.bill,
  billId: ownProps.navigation.state.params.billId,
  representatives: state.representatives
});

const mapDispatchToProps = dispatch => ({
  fetchBillInfo: billId => dispatch(fetchBillInfo(billId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BillView);
