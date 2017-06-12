import { connect } from 'react-redux';
import { signup, authUser, logout } from '../../../actions/session_actions';
import FBOAuth from './oauth.js';

const mapDispatchToProps = dispatch => ({
  authUser: user => dispatch(authUser(user)),
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(FBOAuth);
