import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = state => (
  {
    state: state,
    currentUser: state.session.currentUser
  }
);

export default connect(mapStateToProps, null)(App);
