import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login, signup, receiveErrors, demoIn } from '../../actions/session_actions';


const mapStateToProps = state => (
  {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  }
);

const mapDispatchToProps = dispatch => (
  {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors({})),
    demoIn: () => dispatch(demoIn())
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
