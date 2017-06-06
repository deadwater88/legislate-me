import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login, signup } from '../actions/session_actions';
import { clearErrors } from '../actions/error_actions';


const mapDispatchToProps = dispatch => (
  {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors({}))
  }
);


export default connect(null,mapDispatchToProps)(LoginForm);
