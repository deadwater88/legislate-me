import { connect } from 'react-redux';
import { signup, authUser } from '../../../actions/session_actions';
import FBOAuth from './oauth.js';

const mapDispatchToProps = dispatch => ({
  authUser: user => dispatch(authUser(user))
});

export default connect(null, mapDispatchToProps)(FBOAuth);
