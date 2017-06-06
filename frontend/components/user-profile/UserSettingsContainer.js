import { connect } from 'react-redux';

import UserSettings from './UserSettings';
import { logout } from '../../actions/session_actions';
import { updateAddress, deleteUser }

const mapStateToProps = state => (
  {
    session: state.session
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: user => dispatch(logout(user)),
    deleteUser: user => dispatch(deleteUser(user)),
    updateAddress: address => dispatch(updateAddress(address))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(UserSettings);
