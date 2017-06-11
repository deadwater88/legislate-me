import { connect } from 'react-redux';

import BillView from './bill_view';
import { fetchBillInfo } from '../../util/bill_api_util';
// import { contactRepresentatives } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  // contactRepresentatives: contactRepresentatives(state.representatives)
  representatives: state.representatives,
  billID: ownProps.billId,
  userName: state.session.currentUser.name 
});

const mapDispatchToProps = dispatch => ({
  fetchBillInfo: billId => dispatch(fetchBillInfo(billId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BillView);
