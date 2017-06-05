import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import OAuth from './oauth';

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
});


export default connect(null, mapDispatchToProps)(OAuth);
