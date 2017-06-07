import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = state => (
  {
    currentUser: state.session.currentUser,
    subjects: state.subjects
  }
);

export default connect(mapStateToProps, null)(UserProfile);
