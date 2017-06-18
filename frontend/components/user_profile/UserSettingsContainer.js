import { connect } from 'react-redux';

import UserSettings from './UserSettings';
import { logout, deleteUser } from '../../actions/session_actions';
import { updateAddress } from '../../actions/representatives_actions';

const mapStateToProps = state => (
  {
    session: state.session,
    representatives: state.session.currentUser.representatives
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
