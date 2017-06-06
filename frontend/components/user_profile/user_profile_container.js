import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
const mapStateToProps = state => (
  {
    currentUser: state.session.currentUser,
    subjects: state.subjects,
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: () => dispatch(logout())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
