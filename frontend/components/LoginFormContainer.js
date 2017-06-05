import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login, signup } from '../util/session_api_util';


const mapDispatchToProps = dispatch => (
  {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user))
  }
);


export default connect(null,mapDispatchToProps)(LoginForm);
