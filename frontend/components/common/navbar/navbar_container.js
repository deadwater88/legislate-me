import { connect } from 'react-redux';
import Navbar from './navbar';
import { login, signup, receiveErrors } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => (
  {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors({}))
  }
);


export default connect(null,mapDispatchToProps)(Navbar);
