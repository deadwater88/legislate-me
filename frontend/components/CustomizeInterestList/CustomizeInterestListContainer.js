import { connect } from 'react-redux';
import CustomizeInterestList from './CustomizeInterestList.js';
import {fetchSubjects, saveSubjects } from '../../actions/subject_actions';
// import { zipped } from '../../reducers/selectors' ;
// import {fetchSubjects}

const mapStateToProps = state => ({
  subjects: state.session.currentUser.subjects
});

const mapDispatchToProps = dispatch => (
  {
    saveSubjects: (subjects) => dispatch(saveSubjects(subjects))
  }
);


export default connect(mapStateToProps,mapDispatchToProps)(CustomizeInterestList);
