import { connect } from 'react-redux';
import CustomizeInterestList from './CustomizeInterestList.js';
import { saveSubjects } from '../../actions/subject_actions';
// import { zipped } from '../../reducers/selectors' ;

const mapStateToProps = state => ({
  subjects: state.session.currentUser.subjects,
  signingUp: state.session.currentUser.setup
});

const mapDispatchToProps = dispatch => (
  {
    saveSubjects: (subjects) => dispatch(saveSubjects(subjects))
  }
);


export default connect(mapStateToProps,mapDispatchToProps)(CustomizeInterestList);
