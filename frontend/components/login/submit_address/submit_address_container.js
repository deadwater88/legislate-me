import createAddress from '../../../actions/representatives_actions';
import SubmitAddress from './submit_address';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  createAddress: (address) => dispatch(createAddress(address))
});

export default connect(null, mapDispatchToProps)(SubmitAddress);
