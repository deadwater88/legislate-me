import { connect } from 'react-redux';

import UserSettings from './UserSettings';
import { logout, deleteUser } from '../../actions/session_actions';
import { updateRepresentatives } from '../../actions/representatives_actions';

const mapStateToProps = state => (
  {
    session: state.session,
    representatives: state.representatives
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: user => dispatch(logout(user)),
    deleteUser: user => dispatch(deleteUser(user)),
    updateRepresentatives: address => dispatch(updateRepresentatives(address))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(UserSettings);
