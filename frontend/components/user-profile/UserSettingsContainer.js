import { connect } from 'react-redux';

import UserSettings from './UserSettings';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => (
  {
    session: state.session
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: user => dispatch(logout(user)),
    deleteUser: user => dispatch(deleteUser(user))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(UserSettings);
